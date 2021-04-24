import { Injectable } from '@nestjs/common';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { AbstractPlaneFactory } from './abstract-plane-factory.service';

@Injectable()
export class CargoFactoryService extends AbstractPlaneFactory {
  public createPlane(): Cargo {
    return new Cargo(
      this.randomUuid4(),
      `${this.randomFirstName()} ${this.randomSecondName()}`,
      this.randomSpeed(500, 1000),
    );
  }
}
