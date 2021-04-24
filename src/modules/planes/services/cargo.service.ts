import { Injectable } from '@nestjs/common';
import { Cargo } from '../entity/cargo.entity';

@Injectable()
export class CargoService {
  private readonly allCargos: Cargo[] = [];

  getCargos(): Cargo[] {
    return this.allCargos;
  }

  addCargo(cargo: Cargo): void {
    this.allCargos.push(cargo);
  }
}
