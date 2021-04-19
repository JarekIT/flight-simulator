import { CargoStatus } from "./enum";

export interface IPoint {
  lat: number;
  lng: number;
}

export interface IIdentity {
  uuid: string;
  name: string;
  location: IPoint;
}

export interface AirportDTO extends IIdentity {
  shortName: string;
  country: string;
  city: string;
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
  start: AirportDTO;
  end: AirportDTO;
  hitBy?: string;
  status: CargoStatus;
}

export interface GroupedCargos {
  cargosAirport: CargoDTO[];
  cargosFlight: CargoDTO[];
  cargosOffline: CargoDTO[];
}
