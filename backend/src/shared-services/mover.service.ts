import { Injectable } from '@nestjs/common';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { EnemyService } from 'src/modules/planes/services/enemy.service';
import { CargoStatus, ILocation } from 'src/types/all.types';
import * as initSettings from 'src/settings.json';
import { Plane } from 'src/modules/planes/entity/plane.entity';

@Injectable()
export class MoverService {
  constructor(
    private readonly cargoService: CargoService,
    private readonly enemyService: EnemyService,
  ) {}

  moveAllCargos() {
    this.cargoService
      .getCargos()
      .forEach((c: Cargo) => this.canMove(c) && this.moveCargo(c));
  }

  moveAllEnemies() {
    this.enemyService.getEnemies().forEach((e: Enemy) => this.moveEnemy(e));
  }

  private canMove(cargo: Cargo): boolean {
    return cargo.status == CargoStatus.FLIGHT;
  }

  private moveEnemy(enemy: Enemy) {
    const newLocation: ILocation = this.calculateNewLocation(enemy);
    enemy.move(newLocation);
  }

  private moveCargo(cargo: Cargo): void {
    const newFlightAngle: number = this.calculateFlightAngleInDegrees(cargo);
    const newLocation: ILocation = this.calculateNewLocation(cargo);
    cargo.setFlightAngle(newFlightAngle);
    cargo.move(newLocation);
    cargo.addLocationToFlightPath(newLocation);
  }

  private calculateNewLocation(plane: Plane): ILocation {
    const distanceInMeters = this.convertSpeedToDistanceInOneInterval(
      plane.speed,
    );

    // if defined - chose path (cargo), if undefined = random direction (enemy)
    const directionInDegrees: number =
      plane.flightAngle || this.getRandomAngle();

    const newLocation: ILocation = this.destinationPoint(
      plane.location.lat,
      plane.location.lng,
      distanceInMeters,
      directionInDegrees,
    );

    return newLocation;
  }

  private convertSpeedToDistanceInOneInterval(speed: number): number {
    return initSettings.speedScale * speed * 1000;
  }

  private getRandomAngle(): number {
    return Math.floor(Math.random() * 361);
  }

  /**
   * Returns the destination point from a given point, having travelled the given distance
   * on the given initial bearing.
   * http://www.movable-type.co.uk/scripts/latlong.html
   * https://stackoverflow.com/questions/19352921/how-to-use-direction-angle-and-speed-to-calculate-next-times-latitude-and-longi
   *
   * @param   {number} lat - initial latitude in decimal degrees (eg. 50.123)
   * @param   {number} lon - initial longitude in decimal degrees (e.g. -4.321)
   * @param   {number} distance - Distance travelled (metres).
   * @param   {number} bearing - Initial bearing (in degrees from north).
   * @returns {array} destination point as [latitude,longitude] (e.g. [50.123, -4.321])
   *
   * @example
   *     const p = destinationPoint(51.4778, -0.0015, 7794, 300.7); // 51.5135°N, 000.0983°W
   */
  private destinationPoint(
    currentLat: number,
    currentLng: number,
    distance: number,
    bearing: number,
  ): ILocation {
    const radius = 6371e3; // (Mean) radius of earth

    // sinφ2 = sinφ1·cosδ + cosφ1·sinδ·cosθ
    // tanΔλ = sinθ·sinδ·cosφ1 / cosδ−sinφ1·sinφ2
    // see mathforum.org/library/drmath/view/52049.html for derivation

    const δ = Number(distance) / radius; // angular distance in radians
    const θ = this.toRadians(Number(bearing));

    const φ1 = this.toRadians(Number(currentLat));
    const λ1 = this.toRadians(Number(currentLng));

    const sinφ1 = Math.sin(φ1);
    const cosφ1 = Math.cos(φ1);
    const sinδ = Math.sin(δ);
    const cosδ = Math.cos(δ);
    const sinθ = Math.sin(θ);
    const cosθ = Math.cos(θ);

    const sinφ2 = sinφ1 * cosδ + cosφ1 * sinδ * cosθ;
    const φ2 = Math.asin(sinφ2);
    const y = sinθ * sinδ * cosφ1;
    const x = cosδ - sinφ1 * sinφ2;
    const λ2 = λ1 + Math.atan2(y, x);

    // normalise to −180..+180°
    const lat = this.toDegrees(φ2);
    const lng = ((this.toDegrees(λ2) + 540) % 360) - 180;

    return { lat, lng };
  }

  /*
  https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript
   */
  calculateFlightAngleInDegrees(cargo: Cargo): number {
    const startLat = this.toRadians(cargo.location.lat);
    const startLng = this.toRadians(cargo.location.lng);
    const destLat = this.toRadians(cargo.end.location.lat);
    const destLng = this.toRadians(cargo.end.location.lng);

    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x =
      Math.cos(startLat) * Math.sin(destLat) -
      Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    let brng = Math.atan2(y, x);
    brng = this.toDegrees(brng);
    brng = (brng + 360) % 360;

    // console.log('New angle: ' + brng);
    return brng;
  }

  // Converts from degrees to radians.
  private toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  // Converts from radians to degrees.
  private toDegrees(radians: number) {
    return (radians * 180) / Math.PI;
  }
}
