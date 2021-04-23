import { Airport } from 'src/modules/airports/entity/airport.entity';
import { CargoStatus, ICargoPlane } from 'src/types/all.types';
import { Plane } from './plane.entity';

export class Cargo extends Plane implements ICargoPlane {
  constructor(
    public uuid: string,
    public name: string = 'aaa',
    public speed: number,
  ) {
    super(uuid, name, speed);
    this.status = CargoStatus.AIRPORT;
  }

  status: CargoStatus;
  start: Airport;
  end: Airport;
  hitBy: string;

  static flightNumber = 0;

  flyAway(): void {
    try {
      Cargo.flightNumber++;
      console.log(
        `Flight nr: ${Cargo.i} | ${this.name} - ${this.start.name} -> ${this.end.name} | ${this.status}`,
      );
      this.status = CargoStatus.FLIGHT;
    } catch (e) {
      console.error(e);
    }
  }

  board(): void {
    throw new Error('not implemented yet');
  }

  setFlightAngle(angle: number): void {
    this.flightAngle = angle;
  }

  setDestination(airport: Airport): void {
    this.end = airport;
  }
}
