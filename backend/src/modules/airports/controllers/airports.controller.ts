import { Controller, Get } from '@nestjs/common';
import { Airport } from '../entity/airport.entity';
import { CitiesService } from '../services/airports.service';

@Controller('airports')
export class CitiesController {
  constructor(public readonly citiesService: CitiesService) {}

  @Get()
  getAll(): Airport[] {
    return this.citiesService.getCities();
  }
}
