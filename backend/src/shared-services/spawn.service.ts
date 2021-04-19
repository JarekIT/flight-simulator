import { Injectable } from '@nestjs/common';
import { City } from 'src/modules/cities/entity/city.entity';
import { CitiesService } from 'src/modules/cities/services/cities.service';
import { Cargo } from 'src/modules/planes/entity/cargo.entity';
import { Enemy } from 'src/modules/planes/entity/enemy.entity';
import { ILocation, ISpawner, PlaneType } from '../types/all.types';
import * as initSettings from '../settings.json';

@Injectable()
export class SpawnService implements ISpawner {
  constructor(private readonly citiesService: CitiesService) {}

  private readonly centerPoint: ILocation = { lat: 50, lng: 15 };

  spawn(plane: PlaneType) {
    if (plane instanceof Cargo) {
      (plane as Cargo).location = this.setRandomAirportLocation(plane);
    } else if (plane instanceof Enemy) {
      (plane as Enemy).location = this.setRandomCircumferencePoint(
        this.centerPoint,
        this.randomSpawnDistance(),
      );
    } else {
      return null;
    }
  }

  private randomSpawnDistance = (): number => {
    return (
      Math.pow(Math.random(), 0.5) * initSettings.enemySpawnRangeInKm * 1000
    );
  };

  private setRandomAirportLocation = (cargo: Cargo) => {
    const cities: City[] = this.citiesService.getCities();
    const randomCity: City = cities[Math.floor(Math.random() * cities.length)];

    cargo.start = randomCity;
    return { ...randomCity.location };
  };

  /* 
    Based on: http://www.movable-type.co.uk/scripts/latlong.html#destPoint
  */
  private readonly EARTH_RADIUS = 6371000; // meters
  private readonly DEG_TO_RAD = Math.PI / 180.0;
  private readonly THREE_PI = Math.PI * 3;
  private readonly TWO_PI = Math.PI * 2;

  private toRadians = (deg: number) => deg * this.DEG_TO_RAD;
  private toDegrees = (rad: number) => rad / this.DEG_TO_RAD;

  private setRandomCircumferencePoint = (
    centerPoint: ILocation,
    radius: number,
    randomFn: () => number = Math.random,
  ) => {
    const sinLat = Math.sin(this.toRadians(centerPoint.lat));
    const cosLat = Math.cos(this.toRadians(centerPoint.lat));

    // Random bearing (direction out 360 degrees)
    const bearing = randomFn() * this.TWO_PI;
    const sinBearing = Math.sin(bearing);
    const cosBearing = Math.cos(bearing);

    // Theta is the approximated angular distance
    const theta = radius / this.EARTH_RADIUS;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    // let rLatitude, rLongitude;
    const rLatitude = Math.asin(
      sinLat * cosTheta + cosLat * sinTheta * cosBearing,
    );

    let rLongitude =
      this.toRadians(centerPoint.lng) +
      Math.atan2(
        sinBearing * sinTheta * cosLat,
        cosTheta - sinLat * Math.sin(rLatitude),
      );

    // Normalize longitude L such that -PI < L < +PI
    rLongitude = ((rLongitude + this.THREE_PI) % this.TWO_PI) - Math.PI;

    return { lat: this.toDegrees(rLatitude), lng: this.toDegrees(rLongitude) };
  };
}
