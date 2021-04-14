import { Controller, Get } from '@nestjs/common';
import { CitiesService } from '../services/cities.service';

@Controller('cities')
export class CitiesController {
  constructor(public readonly citiesService: CitiesService) {}

  @Get()
  async getAll() {
    this.citiesService.getAll();
  }
}
