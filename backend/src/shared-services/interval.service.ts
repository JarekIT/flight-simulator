import { Injectable } from '@nestjs/common';
import { DispatcherService } from './dispatcher.service';
import { MoverService } from './mover.service';

@Injectable()
export class IntervalService {
  constructor(
    private readonly moverService: MoverService,
    private readonly dispatcherService: DispatcherService,
  ) {}

  startInterval(movePlaneIntervalInMs: number): void {
    setInterval(() => {
      this.dispatcherService.startAllLandedCargos();
      this.moverService.moveAllCargos();
      this.moverService.moveAllEnemies();
    }, movePlaneIntervalInMs);
  }
}
