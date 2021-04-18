import { Controller, Get } from '@nestjs/common';
import { Cargo } from '../entity/cargo.entity';
import { Enemy } from '../entity/enemy.entity';
import { CargoService } from '../services/cargo.service';
import { EnemyService } from '../services/enemy.service';

@Controller('planes')
export class PlanesController {
  constructor(
    private readonly enemiesService: EnemyService,
    private readonly cargosService: CargoService,
  ) {}

  @Get('enemies')
  getAllEnemies(): Enemy[] {
    return this.enemiesService.getEnemies();
  }

  @Get('cargos')
  getAllCargos(): Cargo[] {
    return this.cargosService.getCargos();
  }
}
