import { Injectable } from '@nestjs/common';
import { ICity } from '../../types/types';

@Injectable()
export class CitiesService {
  private allCities: ICity[];

  getAll(): ICity[] {
    return this.allCities ? this.allCities : this.initData();
  }

  private initData(): ICity[] {
    const data: ICity[] = [
      {
        id: 1,
        name: 'Berlin',
        location: { lat: 52.520008, lng: 13.404954 },
        shortName: 'BERL',
      },
      {
        id: 2,
        name: 'Prague',
        location: { lat: 50.075539, lng: 14.4378 },
        shortName: 'PRAG',
      },
      {
        id: 3,
        name: 'Bratislava',
        location: { lat: 48.148598, lng: 17.107748 },
        shortName: 'BRAT',
      },
      {
        id: 4,
        name: 'Vilnius',
        location: { lat: 54.687157, lng: 25.279652 },
        shortName: 'VILN',
      },
      {
        id: 5,
        name: 'Minsk',
        location: { lat: 53.902334, lng: 27.561879 },
        shortName: 'MINS',
      },
      {
        id: 6,
        name: 'København',
        location: { lat: 55.6867243, lng: 12.5700724 },
        shortName: 'KOPE',
      },
      {
        id: 7,
        name: 'Kyiv',
        location: { lat: 50.4500336, lng: 30.5241361 },
        shortName: 'KYIV',
      },
      {
        id: 8,
        name: 'Stockholm',
        location: { lat: 59.3251172, lng: 18.0710935 },
        shortName: 'STOC',
      },
      {
        id: 9,
        name: 'Budapest',
        location: { lat: 47.4813896, lng: 19.1460941 },
        shortName: 'BUDA',
      },
      {
        id: 10,
        name: 'Riga',
        location: { lat: 56.9493977, lng: 24.1051846 },
        shortName: 'RIGA',
      },
    ];

    this.allCities = data;
    return data;
  }
}
