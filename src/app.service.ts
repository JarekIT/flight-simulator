import { Injectable } from '@nestjs/common';
import { IntervalService } from './shared-services/interval.service';
import { ManagerService } from './shared-services/manager.service';
import * as initSettings from './config/settings.json';

@Injectable()
export class AppService {
  constructor(
    private readonly intervalService: IntervalService,
    private readonly managerService: ManagerService,
  ) {
    this.initApp();
  }

  private async initApp() {
    await this.initAirports();
    this.initCargos(initSettings.numberOfCargos);
    this.initEnemies(initSettings.numberOfEnemies);
    this.initInterval(initSettings.intervalInMs);
  }

  private async initAirports() {
    await this.managerService.getAirports();
  }

  private initCargos(nrOfPlanes: number) {
    for (let i = 0; i < nrOfPlanes; i++) {
      this.managerService.createCargo();
    }
  }

  private initEnemies(nrOfPlanes: number) {
    for (let i = 0; i < nrOfPlanes; i++) {
      this.managerService.createEnemy();
    }
  }

  private initInterval(movePlaneIntervalInMs: number): void {
    this.intervalService.startInterval(movePlaneIntervalInMs);
  }
}
