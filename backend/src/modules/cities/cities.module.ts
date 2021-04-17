import { Module } from '@nestjs/common';
import { CitiesService } from './services/cities.service';
import { CitiesController } from './controllers/cities.controller';

@Module({
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
