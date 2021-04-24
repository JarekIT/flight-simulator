import { CargoStatus, IEnemyPlane } from 'src/types/all.types';
import { Cargo } from './cargo.entity';
import { Plane } from './plane.entity';

export class Enemy extends Plane implements IEnemyPlane {
  constructor(
    public uuid: string,
    public name: string,
    public speed: number,
    public fireRange: number,
  ) {
    super(uuid, name, speed);
  }

  inShootRange(cargo: Cargo): boolean {
    const distance: number = this.getDistanceBetweenPoints(
      this.location,
      cargo.location,
    );

    if (distance < this.fireRange) {
      console.log(`Alert: ${cargo.name} hit by ${this.name}`);
      this.shoot(cargo);
      return true;
    }
    return false;
  }

  shoot(cargo: Cargo): void {
    cargo.status = CargoStatus.OFFLINE;
    cargo.hitBy = this.name;
  }
}
