import { Injectable } from '@nestjs/common';
import { IntervalService } from './shared-services/interval.service';
import { ManagerService } from './shared-services/manager.service';

@Injectable()
export class AppService {
  constructor(
    private readonly intervalService: IntervalService,
    private readonly managerService: ManagerService,
  ) {
    this.prepareCargos(10);
    this.prepareEnemies(10);
    this.initInterval(1000);
  }

  private initInterval(movePlaneIntervalInMs: number): void {
    this.intervalService.startInterval(movePlaneIntervalInMs);
  }

  private prepareCargos(nrOfPlanes: number) {
    for (let i = 0; i < nrOfPlanes; i++) {
      this.managerService.createCargo();
    }
  }

  private prepareEnemies(nrOfPlanes: number) {
    for (let i = 0; i < nrOfPlanes; i++) {
      this.managerService.createEnemy();
    }
  }
}
