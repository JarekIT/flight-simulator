import { ILocation, IPlane } from 'src/types/all.types';
import * as initSettings from 'src/settings.json';

export class Plane implements IPlane {
  constructor(public uuid: string, public name: string, public speed: number) {}

  flightAngle?: number;
  location: ILocation;

  move() {
    const distanceInKm = this.convertSpeedToDistanceInOneInterval(this.speed);
    const distanceInLatLng: number = distanceInKm / 111;

    // if defined - chose path (cargo) // if undefined = random direction (enemy)
    const directionInDegrees: number =
      this.flightAngle || this.getRandomDirection();

    const deltaLat =
      Math.cos(directionInDegrees * (Math.PI / 180)) * distanceInLatLng;
    const deltaLng =
      Math.sin(directionInDegrees * (Math.PI / 180)) * distanceInLatLng;

    const newLat = this.location.lat + deltaLat;
    const newLng = this.location.lng + deltaLng;

    // console.log(
    //   `Move: ${this.name} | dist: ${distanceInKm.toFixed(
    //     1,
    //   )}km | angle: ${directionInDegrees.toFixed(
    //     0,
    //   )} | loc: { lat:${newLat.toFixed(3)} , lng: ${newLng.toFixed(
    //     3,
    //   )}} | change: { ${deltaLat.toFixed(4)}, ${deltaLng.toFixed(4)} }`,
    // );

    this.setNewLocation(newLat, newLng);
  }

  private getRandomDirection(): number {
    return Math.floor(Math.random() * 361);
  }

  private setNewLocation(lat: number, lng: number): void {
    this.location = {
      lat: lat,
      lng: lng,
    };
  }

  convertSpeedToDistanceInOneInterval(speed: number): number {
    return initSettings.speedScale * speed;
  }
}
