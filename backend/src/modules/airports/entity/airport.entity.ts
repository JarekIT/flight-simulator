import { IAirport, ILocation } from 'src/types/all.types';

export class Airport implements IAirport {
  constructor(
    public uuid: string,
    public name: string,
    public country: string,
    public city: string,
    public shortName: string,
    public location: ILocation,
  ) {}
}
