import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { CargoService } from './modules/planes/services/cargo.service';
import { EnemyService } from './modules/planes/services/enemy.service';

@WebSocketGateway(3004)
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly cargoService: CargoService,
    private readonly enemyService: EnemyService,
  ) {}
  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('AppGateway');

  private i = 0;

  afterInit(server: Server) {
    this.logger.log(`Initialized!' max listeners: ${server.getMaxListeners()}`);
  }

  handleConnection(client: Socket) {
    this.i++;
    this.logger.log(`Client nr: ${this.i} connected, Id: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleMessages() {
    // this.logger.log(`Handle messages!`);
    const cargos = this.cargoService.getCargos();
    const enemies = this.enemyService.getEnemies();

    this.server.emit('cargos', cargos);
    this.server.emit('enemies', enemies);
  }
}
/*
    https://docs.nestjs.com/websockets/gateways
  */

// @SubscribeMessage('enemies')
// handleEnemies(client: Socket, data: unknown): any {
//   const event = 'enemies';
// const enemies = this.enemyService.getEnemies();
//   return { event, enemies };
// }

//   @SubscribeMessage('cargos')
// handleCargos(
//   @ConnectedSocket() client: Socket,
//   @MessageBody() data: unknown,
// ): any {
//   const event = 'cargos';
// const cargos = this.cargoService.getCargos();
//   return { event, cargos };
// }
