import { Injectable } from '@nestjs/common';
import { City } from '../entity/city.entity';
import * as citiesJson from '../db/cities.json';

@Injectable()
export class CitiesService {
  constructor() {
    this.initCities();
  }

  private readonly allCities: City[] = [];

  getCities(): City[] {
    return this.allCities;
  }

  private async initCities(): Promise<void> {
    // const dataJSON = await fetchCities();
    const dataJson = await citiesJson;
    console.table(dataJson);

    dataJson.forEach((city: any) => {
      this.allCities.push(
        new City(city.uuid, city.name, city.shortName, city.location),
      );
    });
  }
}
