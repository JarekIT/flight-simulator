import { Injectable } from '@nestjs/common';
import { IFactory, Planes, PlaneType } from 'src/types/all.types';
import { CargoFactoryService } from './factories/cargo-factory.service';
import { EnemyFactoryService } from './factories/enemy-factory.service';

@Injectable()
export class FactoryService implements IFactory {
  constructor(
    private readonly enemyFactory: EnemyFactoryService,
    private readonly cargoFactory: CargoFactoryService,
  ) {}

  public create(plane: Planes): PlaneType {
    if (plane == Planes.CARGO) {
      return this.cargoFactory.createPlane();
    } else if (plane == Planes.ENEMY) {
      return this.enemyFactory.createPlane();
    } else {
      return null as PlaneType;
    }
  }
}
