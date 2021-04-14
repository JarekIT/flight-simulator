import { Controller, Get } from '@nestjs/common';
import { PlanesService } from '../services/planes.service';
import { ICargoPlane, IEnemyPlane } from 'src/types/types';

@Controller('planes')
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}

  @Get('enemies')
  async getAllEnemies(): Promise<IEnemyPlane[]> {
    return await this.planesService.getAllEnemies();
  }

  @Get('cargos')
  async getAllCargos(): Promise<ICargoPlane[]> {
    return await this.planesService.getAllCargos();
  }
}
