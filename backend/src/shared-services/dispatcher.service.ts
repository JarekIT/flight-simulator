import { Injectable } from '@nestjs/common';
import { Airport } from 'src/modules/airports/entity/airport.entity';
import { CitiesService } from 'src/modules/airports/services/airports.service';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { CargoService } from 'src/modules/planes/services/cargo.service';
import { CargoStatus, ILocation } from 'src/types/all.types';

@Injectable()
export class DispatcherService {
  constructor(
    private readonly citiesService: CitiesService,
    private readonly cargoService: CargoService,
  ) {}

  startAllCargosInAirports() {
    this.cargoService
      .getCargos()
      .forEach(
        (cargo: Cargo) =>
          cargo.status == CargoStatus.AIRPORT && this.sendCargoToFlight(cargo),
      );
  }

  private sendCargoToFlight(cargo: Cargo) {
    this.prepareCargoToFlight(cargo);
    cargo.flyAway();
  }

  private prepareCargoToFlight(cargo: Cargo) {
    const newDestination: Airport = this.getRandomDestination(cargo);
    cargo.setDestination(newDestination);

    const newFlightAngle: number = this.calculateFlightAngleInDegrees(
      cargo.start.location,
      newDestination.location,
    );
    cargo.setFlightAngle(newFlightAngle);
  }

  private getRandomDestination(cargo: Cargo): Airport {
    const allCities: Airport[] = this.citiesService.getCities();
    const startCity: Airport = cargo.start;

    return this.randomDiffrentCity(allCities, startCity);
  }

  private randomDiffrentCity(airports: Airport[], startCity: Airport): Airport {
    let randNum: number = Math.floor(Math.random() * airports.length);

    while (airports[randNum].name == startCity.name) {
      randNum = Math.floor(Math.random() * airports.length);
    }

    return airports[randNum];
  }

  private calculateFlightAngleInDegrees(
    start: ILocation,
    end: ILocation,
  ): number {
    const startLat = this.toRadians(start.lat);
    const startLng = this.toRadians(start.lng);
    const destLat = this.toRadians(end.lat);
    const destLng = this.toRadians(end.lng);

    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x =
      Math.cos(startLat) * Math.sin(destLat) -
      Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);

    let brng = Math.atan2(y, x);
    brng = this.toDegrees(brng);
    brng = (brng + 360) % 360;

    return brng;
  }

  // Converts from degrees to radians.
  private toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  // Converts from radians to degrees.
  private toDegrees(radians: number) {
    return (radians * 180) / Math.PI;
  }
}
