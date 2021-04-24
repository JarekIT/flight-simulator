import { Airport } from 'src/modules/airports/entity/airport.entity';
import { CargoStatus, ICargoPlane, ILocation } from 'src/types/all.types';
import { Plane } from './plane.entity';

export class Cargo extends Plane implements ICargoPlane {
  constructor(public uuid: string, public name: string, public speed: number) {
    super(uuid, name, speed);
    this.status = CargoStatus.AIRPORT;
  }

  status: CargoStatus;
  start: Airport;
  end: Airport;
  hitBy: string;
  flightPath: ILocation[] = [];
  flightNumber: number;

  flyAway(flightNumber: number): void {
    this.flightNumber = flightNumber;
    this.status = CargoStatus.FLIGHT;
    console.log(
      `Flight nr: ${this.flightNumber} | ${this.name} - ${this.start.name} -> ${this.end.name} | ${this.status}`,
    );
  }

  inLandingRange() {
    const distanceInKm = this.convertSpeedToDistanceInOneInterval() / 1000;
    const distanceToDestination = this.getDistanceBetweenPoints(
      this.location,
      this.end.location,
    );

    // console.log(`Distance: ${this.name} - ${distanceInKm.toFixed(0)} - ${distanceToDestination.toFixed(0)} - ${(distanceToDestination/distance).toFixed(0)} sec left`)

    return distanceInKm > distanceToDestination;
  }

  land(): void {
    console.log(
      `Flight nr: ${this.flightNumber} | ${this.name} - ${this.start.name} -> ${this.end.name} | ${this.status} -> prepare for landing`,
    );
    this.status = CargoStatus.AIRPORT;
    this.flightPath = [];
    this.start = { ...this.end };
    this.end = null;
    this.flightNumber = null;
    console.log(
      `Flight nr: ${this.flightNumber} ended | ${this.name} - ${this.start.name} -> ${this.end?.name} | ${this.status} -> landed`,
    );
  }

  setFlightAngle(angle: number): void {
    this.flightAngle = angle;
  }

  setDestination(airport: Airport): void {
    this.end = airport;
  }

  addLocationToFlightPath(location: ILocation) {
    this.flightPath.push(location);
  }
}
