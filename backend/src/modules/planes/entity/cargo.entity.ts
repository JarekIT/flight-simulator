import { City } from 'src/modules/cities/entity/city.entity';
import { ICargoPlane } from 'src/types/all.types';
import { Plane } from './plane.entity';

export class Cargo extends Plane implements ICargoPlane {
  constructor(
    public uuid: string,
    public name: string = 'aaa',
    public speed: number,
  ) {
    super(uuid, name, speed);
    this.alive = true;
    this.landed = true;
  }

  alive: boolean;
  start: City;
  end: City;
  landed: boolean;
  hitBy: string;

  static i = 0;

  flyAway(): void {
    try {
      Cargo.i++;
      console.log(
        `Flight nr: ${Cargo.i} | ${this.name} - ${this.start.name} -> ${this.end.name}`,
      );
      this.landed = false;
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
