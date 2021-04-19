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

export interface ICity extends IIdentity {
  shortName: string;
}

export interface IPlane extends IIdentity {
  location: ILocation;
  speed: number;
  flightAngle?: number;
  move: () => void;
}

export interface IEnemyPlane extends IPlane {
  fireRange: number;
  inRange: (c: Cargo) => boolean;
  shoot: (c: Cargo) => void;
}

export interface ICargoPlane extends IPlane {
  start: ICity;
  end: ICity;
  hitBy?: string;
  flyAway: () => void;
  board: () => void;
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
