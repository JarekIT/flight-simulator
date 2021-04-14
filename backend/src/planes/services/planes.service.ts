import { Injectable } from '@nestjs/common';
import { ICargoPlane, IEnemyPlane } from 'src/types/types';

@Injectable()
export class PlanesService {
  async getAllEnemies(): Promise<IEnemyPlane[]> {
    let enemies: IEnemyPlane[] = [];

    fetch('../../db/enemies.json')
      .then((response) => response.json())
      .then((data: IEnemyPlane[]) => (enemies = data))
      .catch((err) => console.log(err));

    return enemies;
  }

  async getAllCargos(): Promise<ICargoPlane[]> {
    let cargos: ICargoPlane[] = [];

    fetch('../../db/cargos.json')
      .then((response) => response.json())
      .then((data: ICargoPlane[]) => (cargos = data))
      .catch((err) => console.log(err));

    return cargos;
  }
}
