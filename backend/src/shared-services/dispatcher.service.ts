import { Injectable } from '@nestjs/common';
import { Airport } from 'src/modules/airports/entity/airport.entity';
import { AirportsService } from 'src/modules/airports/services/airports.service';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { CargoStatus } from 'src/types/all.types';

@Injectable()
export class DispatcherService {
  constructor(
    private readonly airportsService: AirportsService,
    private readonly cargoService: CargoService,
  ) {}

  startAllCargosInAirports() {
    this.cargoService
      .getCargos()
      .forEach(
        (cargo: Cargo) =>
          this.isCargoInAirport(cargo) && this.sendCargoToFlight(cargo),
      );
  }

  private isCargoInAirport(cargo: Cargo): boolean {
    return cargo.status == CargoStatus.AIRPORT;
  }

  private sendCargoToFlight(cargo: Cargo) {
    this.prepareCargoToFlight(cargo);
    cargo.flyAway();
  }

  private prepareCargoToFlight(cargo: Cargo) {
    const newDestination: Airport = this.getRandomDestination(cargo);
    cargo.setDestination(newDestination);
  }

  private getRandomDestination(cargo: Cargo): Airport {
    const allAirports: Airport[] = this.airportsService.getAirports();

    const startAirport: Airport = cargo.start;

    return this.randomDifferentAirport(allAirports, startAirport);
  }

  private randomDifferentAirport(
    airports: Airport[],
    startAirport: Airport,
  ): Airport {
    let randNum: number = Math.floor(Math.random() * airports.length);

    while (airports[randNum].name == startAirport.name) {
      randNum = Math.floor(Math.random() * airports.length);
    }

    return airports[randNum];
  }
}
