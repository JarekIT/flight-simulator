import { Injectable } from '@nestjs/common';
import { PlaneType } from 'src/types/all.types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export abstract class AbstractPlaneFactory {
  public abstract createPlane(): PlaneType;

  randomFirstName(): string {
    return this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
  }
  randomSecondName(): string {
    return this.secondNames[
      Math.floor(Math.random() * this.secondNames.length)
    ];
  }
  randomSpeed(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  randomUuid4(): string {
    return uuidv4();
  }

  private firstNames = [
    'Falcon',
    'Wolf',
    'Tiger',
    'Fox',
    'Eagle',
    'Spider',
    'Nighthawk',
    'Blackbird',
    'Hercules',
    'Raptor',
    'Phantom',
    'Thunderbolt',
  ];

  private secondNames = [
    'Alfa',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Gold',
    'Hotel',
    'India',
    'Juliett',
  ];
}
