import { IEnemyPlane } from 'src/types/all.types';
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

  inRange(cargo: Cargo): boolean {
    const distance: number = this.getDistanceBetweenPoints(this, cargo);

    if (distance < this.fireRange) {
      console.log(`alert: ${cargo.name} hit by ${this.name}`);
      this.shoot(cargo);
      return true;
    }
    return false;
  }

  shoot(cargo: Cargo): void {
    cargo.alive = false;
    cargo.hitBy = this.name;
  }

  private getDistanceBetweenPoints(enemy: Enemy, cargo: Cargo): number {
    const lat1: number = cargo.location.lat,
      lng1: number = cargo.location.lng,
      lat2: number = enemy.location.lat,
      lng2: number = enemy.location.lng,
      R = 6378137,
      dLat: number = this.degreesToRadians(lat2 - lat1),
      dLong: number = this.degreesToRadians(lng2 - lng1),
      a: number =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degreesToRadians(lat1)) *
          Math.cos(this.degreesToRadians(lat1)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2),
      c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
      distance: number = (R * c) / 1000;

    return distance;
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
