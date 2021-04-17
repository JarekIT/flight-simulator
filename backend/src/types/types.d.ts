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
  spawn: () => void;
  move: () => void;
}

export interface IEnemyPlane extends IPlane {
  fireRange: number;
  inRange: () => boolean;
  shoot: () => void;
}

export interface ICargoPlane extends IPlane {
  start: ICity;
  end: ICity;
  status: boolean;
  flightDirection: number;
  setRandomDestination: () => void;  
  startJourney: () => void;
  endJourney: () => void;
}

export interface IFactory {
  create: <T>() => T;
}
