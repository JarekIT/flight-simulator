interface ILocation {
  lat: number;
  lng: number;
}

interface IIdentity {
  id: number;
  name: string;
  localisation: ILocation;
}

interface ICity extends IIdentity {
  shortName: string;
  location: ILocation;
}

interface IPlane extends IIdentity {
  location: ILocation;
  speed: number;
}

interface IEnemyPlane extends IPlane {
  fireRange: number;
}

interface ICargoPlane extends IPlane {
  start: ICity;
  end: ICity;
  status: boolean;
  flightDirection: number;
}
