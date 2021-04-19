export interface IPoint {
  lat: number;
  lng: number;
}

interface IIdentity {
  uuid: string;
  name: string;
  location: IPoint;
}

export interface CityDTO extends IIdentity {
  shortName: string;
}

interface IPlane extends IIdentity {
  location: IPoint;
  speed: number;
  flightAngle?: number;
}

export interface EnemyDTO extends IPlane {
  fireRange: number;
}

export interface CargoDTO extends IPlane {
  alive: boolean;
  start: CityDTO;
  end: CityDTO;
  landed: boolean;
  hitBy?: string;
}
