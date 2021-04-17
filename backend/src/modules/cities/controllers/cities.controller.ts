import { Controller, Get } from '@nestjs/common';
import { ICity } from 'src/types/types';
import { CitiesService } from '../services/cities.service';

@Controller('cities')
export class CitiesController {
  constructor(public readonly citiesService: CitiesService) {}

  @Get()
  async getAll(): Promise<ICity[]> {
    return await this.citiesService.getAll();
  }
}
