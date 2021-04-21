import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';
import { BattleService } from './battle.service';
import { DispatcherService } from './dispatcher.service';
import { MoverService } from './mover.service';

@Injectable()
export class IntervalService {
  constructor(
    private readonly moverService: MoverService,
    private readonly dispatcherService: DispatcherService,
    private readonly battleService: BattleService,
    private readonly appGateway: AppGateway,
  ) {}

  startInterval(movePlaneIntervalInMs: number): void {
    setInterval(() => {
      this.dispatcherService.startAllCargosInAirports();
      this.moverService.moveAllCargos();
      this.moverService.moveAllEnemies();
      this.battleService.everyEnemyShootsEveryCargoInFireRange();
      this.appGateway.handleMessages();
    }, movePlaneIntervalInMs);
  }
}
