import { Controller, Get } from '@nestjs/common';
import { ICity } from 'src/types/all.types';
import { CitiesService } from '../services/cities.service';

@Controller('cities')
export class CitiesController {
  constructor(public readonly citiesService: CitiesService) {}

  @Get()
  getAll(): ICity[] {
    return this.citiesService.getCities();
  }
}
