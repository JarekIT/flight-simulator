export interface IPoint {
  lat: number;
  lng: number;
}

interface IIdentity {
  uuid: string;
  name: string;
  location: ILocation;
}

export interface CityDTO extends IIdentity {
  shortName: string;
}
