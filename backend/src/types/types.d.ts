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
  move: () => void;
}

export interface IEnemyPlane extends IPlane {
  fireRange: number;
  inRange: (c: ICargoPlane) => boolean;
  shoot: (c: ICargoPlane) => void;
}

export interface ICargoPlane extends IPlane {
  alive: boolean;
  start: ICity;
  end: ICity;
  flightDirection: number;
  setRandomDestination: () => void;  
  startJourney: () => void;
  endJourney: () => void;
  hitBy: string;
}

export interface IFactory {
  create: <T>() => T;
}

export interface ISpawner {
  spawn: <T>() => T;
}