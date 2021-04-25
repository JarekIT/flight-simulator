import io from 'socket.io-client';
import { CargoDTO, EnemyDTO } from '../../interfaces/types';

const ENDPOINT = 'ws://localhost:3004';
const socket = io(ENDPOINT);

export const openSocketConnection = (): void => {
  console.log(socket);

  // eslint-disable-next-line
  socket.on('enemies', (enemies: EnemyDTO[]) => {
    // console.log(enemies);
  });

  // eslint-disable-next-line
  socket.on('cargos', (cargos: CargoDTO) => {
    // console.log(cargos);
  });
};
