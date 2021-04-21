import io from "socket.io-client";
import { CargoDTO, EnemyDTO } from "../../interfaces/types";

const ENDPOINT = "ws://localhost:3004";
const socket = io(ENDPOINT);

export const openSocketConnection = () => {
  console.log(socket);

  socket.on("enemies", (enemies: EnemyDTO[]) => {
    // console.log(enemies);
  });

  socket.on("cargos", (cargos: CargoDTO) => {
    // console.log(cargos);
  });
};
