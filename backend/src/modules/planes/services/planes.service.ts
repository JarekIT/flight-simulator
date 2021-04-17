import { Injectable } from '@nestjs/common';
import { ICargoPlane, IEnemyPlane } from 'src/types/types';
import { SpawnService } from '../../../shared-services/spawn.service';

@Injectable()
export class PlanesService {
  constructor(private readonly spawnService: SpawnService) {
    this.allCargos || this.fetchAllCargos();
    this.allEnemies || this.fetchAllEnemies();
  }

  allCargos: ICargoPlane[];
  allEnemies: IEnemyPlane[];

  getAllCargos() {
    return this.allCargos;
  }

  getAllEnemies() {
    return this.getAllEnemies;
  }

  async fetchAllEnemies(): Promise<IEnemyPlane[]> {
    let enemies: IEnemyPlane[] = [];

    fetch('../../db/enemies.json')
      .then((response) => response.json())
      .then((data: IEnemyPlane[]) => (enemies = data))
      .catch((err) => console.log(err));

    return enemies;
  }

  async fetchAllCargos(): Promise<ICargoPlane[]> {
    let cargos: ICargoPlane[] = [];

    fetch('../../db/cargos.json')
      .then((response) => response.json())
      .then((data: ICargoPlane[]) => (cargos = data))
      .catch((err) => console.log(err));

    return cargos;
  }

  createCargo(): void {
    const cargo: ICargoPlane = this.spawnService.spawnCargo();
    this.allCargos.push(cargo);
  }
}
