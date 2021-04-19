import { Injectable } from '@nestjs/common';
import { IntervalService } from './shared-services/interval.service';
import { ManagerService } from './shared-services/manager.service';
import * as initSettings from './settings.json';

@Injectable()
export class AppService {
  constructor(
    private readonly intervalService: IntervalService,
    private readonly managerService: ManagerService,
  ) {
    this.prepareCargos(initSettings.numberOfCargos);
    this.prepareEnemies(initSettings.numberOfEnemies);
    this.initInterval(initSettings.intervalInMs);
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
