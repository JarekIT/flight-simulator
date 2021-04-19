import { Injectable } from '@nestjs/common';
import { City } from 'src/modules/cities/entity/city.entity';
import { CitiesService } from 'src/modules/cities/services/cities.service';
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
    const newDestination: City = this.getRandomDestination(cargo);
    cargo.setDestination(newDestination);

    const newFlightAngle: number = this.calculateFlightAngleInDegrees(
      cargo.start.location,
      newDestination.location,
    );
    cargo.setFlightAngle(newFlightAngle);
  }

  private getRandomDestination(cargo: Cargo): City {
    const allCities: City[] = this.citiesService.getCities();
    const startCity: City = cargo.start;

    return this.randomDiffrentCity(allCities, startCity);
  }

  private randomDiffrentCity(cities: City[], startCity: City): City {
    let randNum: number = Math.floor(Math.random() * cities.length);

    while (cities[randNum].name == startCity.name) {
      randNum = Math.floor(Math.random() * cities.length);
    }

    return cities[randNum];
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
