import { Injectable } from '@nestjs/common';
import { FactoryService } from './factory.service';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { EnemyService } from 'src/modules/planes/services/enemy.service';
import { Planes } from 'src/types/all.types';
import { SpawnService } from './spawn.service';

@Injectable()
export class ManagerService {
  constructor(
    private readonly cargoService: CargoService,
    private readonly enemyService: EnemyService,
    private readonly factoryService: FactoryService,
    private readonly spawnerService: SpawnService,
  ) {}

  createCargo() {
    const newCargo: Cargo = this.factoryService.create(Planes.CARGO) as Cargo;
    this.cargoService.addCargo(newCargo);
    this.spawnerService.spawn(newCargo);
  }

  createEnemy() {
    const newEnemy: Enemy = this.factoryService.create(Planes.ENEMY) as Enemy;
    this.enemyService.addEnemy(newEnemy);
    this.spawnerService.spawn(newEnemy);
  }
}
