import { Cargo } from '../modules/planes/entity/cargo.entity';
import { Enemy } from '../modules/planes/entity/enemy.entity';

export interface ILocation {
  lat: number;
  lng: number;
}

interface IIdentity {
  uuid: string;
  name: string;
  location: ILocation;
}

export interface IAirport extends IIdentity {
  shortName: string;
  country: string;
  city: string;
}

export interface IPlane extends IIdentity {
  location: ILocation;
  speed: number;
  flightAngle?: number;
  move: (l: ILocation) => void;
}

export interface IEnemyPlane extends IPlane {
  fireRange: number;
  inRange: (c: Cargo) => boolean;
  shoot: (c: Cargo) => void;
}

export interface ICargoPlane extends IPlane {
  start: IAirport;
  end: IAirport;
  hitBy?: string;
  flyAway: () => void;
  board: () => void;
  flightPath: ILocation[];
}

export type PlaneType = Cargo | Enemy;

export enum Planes {
  ENEMY,
  CARGO,
}

export interface IFactory {
  create: (plane: Planes) => PlaneType;
}

export interface ISpawner {
  spawn: (plane: PlaneType) => void;
}

export enum CargoStatus {
  AIRPORT = 'AIRPORT',
  FLIGHT = 'FLIGHT',
  OFFLINE = 'OFFLINE',
}
