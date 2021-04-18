import { ICity, ILocation } from 'src/types/all.types';

export class City implements ICity {
  constructor(
    public uuid: string,
    public name: string,
    public shortName: string,
    public location: ILocation,
  ) {}
}
