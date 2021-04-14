export interface ILocation {
  lat: number;
  lng: number;
}

interface IIdentity {
  id: number;
  name: string;
  location: ILocation;
}

export interface ICity extends IIdentity {
  shortName: string;
  location: ILocation;
}

interface IPlane extends IIdentity {
  location: ILocation;
  speed: number;
}

export interface IEnemyPlane extends IPlane {
  fireRange: number;
}

export interface ICargoPlane extends IPlane {
  start: ICity;
  end: ICity;
  status: boolean;
  flightDirection: number;
}
