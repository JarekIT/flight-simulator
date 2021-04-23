import { ILocation, IPlane } from 'src/types/all.types';

export class Plane implements IPlane {
  constructor(public uuid: string, public name: string, public speed: number) {}

  flightAngle?: number;
  location: ILocation;

  move(newLocation: ILocation): void {
    // console.log(
    //   `Move: ${this.name} | dist: ${distanceInMeters.toFixed(
    //     1,
    //   )}km | angle: ${directionInDegrees.toFixed(
    //     2,
    //   )} | loc: { lat:${newLat.toFixed(3)} , lng: ${newLng.toFixed(3)}}`,
    // );

    this.location = newLocation;
  }
}
