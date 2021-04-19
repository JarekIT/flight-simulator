import { Injectable } from '@nestjs/common';
import { Airport } from '../entity/airport.entity';
import * as airportsJson from '../db/airports.json';

@Injectable()
export class CitiesService {
  constructor() {
    this.initCities();
  }

  private readonly allCities: Airport[] = [];

  getCities(): Airport[] {
    return this.allCities;
  }

  private initCities() {
    for (let i = 0; i < 100; i++) {
      const id = Math.floor(Math.random() * airportsJson.length);
      const airport = airportsJson[id];

      this.allCities.push(
        new Airport(
          airport.id,
          airport.name,
          airport.country,
          airport.city,
          airport.iata,
          {
            lat: airport.lat,
            lng: airport.lng,
          },
        ),
      );
    }
  }
}
