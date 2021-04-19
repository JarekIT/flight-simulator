import { Injectable } from '@nestjs/common';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { EnemyService } from 'src/modules/planes/services/enemy.service';
import { CargoStatus } from 'src/types/all.types';

@Injectable()
export class BattleService {
  constructor(
    private readonly enemyService: EnemyService,
    private readonly cargoService: CargoService,
  ) {}

  everyEnemyShootsEveryCargoInFireRange() {
    this.cargoService.getCargos().forEach((cargo: Cargo) => {
      if (cargo.status == CargoStatus.FLIGHT) {
        this.enemyService.getEnemies().forEach((enemy: Enemy) => {
          enemy.inRange(cargo);
        });
      }
    });
  }
}
