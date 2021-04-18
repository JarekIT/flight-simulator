import { Injectable } from '@nestjs/common';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { EnemyService } from 'src/modules/planes/services/enemy.service';

@Injectable()
export class MoverService {
  constructor(
    private readonly cargoService: CargoService,
    private readonly enemyService: EnemyService,
  ) {}

  moveAllCargos() {
    this.cargoService
      .getCargos()
      .forEach((c: Cargo) => this.canMove(c) && c.move());
  }
  moveAllEnemies() {
    this.enemyService.getEnemies().forEach((e: Enemy) => e.move());
  }

  private canMove(cargo: Cargo): boolean {
    return cargo.alive && !cargo.landed;
  }
}
