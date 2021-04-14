import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { ICity } from '../../types/types';

@Injectable()
export class CitiesService {
  async getAll(): Promise<ICity[]> {
    let cities: ICity[];

    fetch('../../db/cities.json')
      .then((response) => response.json())
      .then((data: ICity[]) => (cities = data))
      .catch((err) => console.log(err));

    return cities;
  }
}
