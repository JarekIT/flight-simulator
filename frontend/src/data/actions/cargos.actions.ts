import { Dispatch } from "../../interfaces/store";
import { CargoDTO } from "../../interfaces/types";
import { fetchCargos } from "../fetch/cargos.fetch";

export const loadCargos = async (dispatch: Dispatch): Promise<void> => {
  let data: CargoDTO[] | Error = await fetchCargos();

  if (data instanceof Error) {
    dispatch({
      type: "CARGOS_GET_FAILURE",
      payload: data,
    });
  } else {
    dispatch({
      type: "CARGOS_GET_SUCCESS",
      payload: data,
    });
  }
};
