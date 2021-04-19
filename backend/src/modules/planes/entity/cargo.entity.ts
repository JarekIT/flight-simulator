import { City } from 'src/modules/cities/entity/city.entity';
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
  start: City;
  end: City;
  hitBy: string;

  static i = 0;

  flyAway(): void {
    try {
      Cargo.i++;
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

  setDestination(city: City): void {
    this.end = city;
  }
}
