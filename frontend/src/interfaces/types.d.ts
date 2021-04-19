export interface IPoint {
  lat: number;
  lng: number;
}

export interface IIdentity {
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
  start: CityDTO;
  end: CityDTO;
  hitBy?: string;
  status: CargoStatus;
}
