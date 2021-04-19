import { Module } from '@nestjs/common';
import { CitiesService } from './services/airports.service';
import { CitiesController } from './controllers/airports.controller';

@Module({
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
