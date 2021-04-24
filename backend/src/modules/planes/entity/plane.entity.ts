import { ILocation, IPlane } from 'src/types/all.types';
import * as initSettings from 'src/settings.json';

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

  convertSpeedToDistanceInOneInterval(): number {
    return initSettings.speedScale * this.speed * 1000;
  }

  getDistanceBetweenPoints(from: ILocation, to: ILocation): number {
    const RADIUS_OF_EARTH = 6378137;

    const latF = (from.lat / 180) * Math.PI;
    const lngF = (from.lng / 180) * Math.PI;
    const latT = (to.lat / 180) * Math.PI;
    const lngT = (to.lng / 180) * Math.PI;
    const latD = Math.abs(latF - latT);
    const lngD = Math.abs(lngF - lngT);
    const latH = Math.pow(Math.sin(latD / 2), 2);
    const lngH = Math.pow(Math.sin(lngD / 2), 2);
    const delta =
      2 * Math.asin(Math.sqrt(latH + Math.cos(latF) * Math.cos(latT) * lngH));

    const distance = (RADIUS_OF_EARTH * delta) / 1000;
    return distance;
  }

  // Converts from degrees to radians.
  private toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  // Converts from radians to degrees.
  private toDegrees(radians: number) {
    return (radians * 180) / Math.PI;
  }
}
