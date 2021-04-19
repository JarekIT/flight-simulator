import { Dispatch } from "../../interfaces/store";
import { EnemyDTO } from "../../interfaces/types";
import { fetchEnemies } from "../fetch/enemies.fetch";

export const loadEnemies = async (dispatch: Dispatch): Promise<void> => {
  let data: EnemyDTO[] | Error = await fetchEnemies();

  console.log(data);
  if (data instanceof Error) {
    dispatch({
      type: "ENEMIES_GET_FAILURE",
      payload: data,
    });
  } else {
    dispatch({
      type: "ENEMIES_GET_SUCCESS",
      payload: data,
    });
  }
};
