import { Injectable } from '@nestjs/common';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { AbstractPlaneFactory } from './abstract-plane-factory.service';

@Injectable()
export class EnemyFactoryService extends AbstractPlaneFactory {
  public createPlane(): Enemy {
    return new Enemy(
      this.randomUuid4(),
      `${this.randomFirstName()} ${this.randomSecondName()}`,
      this.randomSpeed(1500, 4000),
      100,
    );
  }
}
