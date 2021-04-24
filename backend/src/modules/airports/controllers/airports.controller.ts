import { Controller, Get } from '@nestjs/common';
import { Airport } from '../entity/airport.entity';
import { AirportsService } from '../services/airports.service';

@Controller('airports')
export class AirportsController {
  constructor(public readonly airportsService: AirportsService) {}

  @Get()
  getAll(): Airport[] {
    return this.airportsService.getAirports();
  }
}
