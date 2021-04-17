import { Module } from '@nestjs/common';
import { PlanesService } from './services/planes.service';
import { PlanesController } from './controllers/planes.controller';

@Module({
  providers: [PlanesService],
  controllers: [PlanesController]
})
export class PlanesModule {}
