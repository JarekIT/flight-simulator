import { Injectable } from '@nestjs/common';
import { Enemy } from '../entity/enemy.entity';

@Injectable()
export class EnemyService {
  private readonly allEnemies: Enemy[] = [];

  getEnemies(): Enemy[] {
    return this.allEnemies;
  }

  addEnemy(enemy: Enemy): void {
    this.allEnemies.push(enemy);
  }
}
