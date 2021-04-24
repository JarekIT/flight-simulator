import { Module } from '@nestjs/common';
import { PlanesController } from './controllers/planes.controller';
import { EnemyService } from './services/enemy.service';
import { CargoService } from './services/cargo.service';

@Module({
  providers: [EnemyService, CargoService],
  controllers: [PlanesController],
})
export class PlanesModule {}
