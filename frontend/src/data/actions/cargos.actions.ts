import { CargoStatus } from "../../interfaces/enum";
import { Dispatch } from "../../interfaces/store";
import { CargoDTO, GroupedCargos } from "../../interfaces/types";
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
      payload: groupedCargosByStatus(data),
    });
  }
};

const groupedCargosByStatus = (cargosToGroup: CargoDTO[]): GroupedCargos => {
  const cargos: GroupedCargos = {
    cargosAirport: [],
    cargosFlight: [],
    cargosOffline: [],
  };

  cargosToGroup.forEach((cargo: CargoDTO) => {
    pushCargoInTheRightGroup(cargo, cargos);
  });

  return cargos;
};

const pushCargoInTheRightGroup = (
  cargo: CargoDTO,
  cargos: GroupedCargos
): void => {
  switch (cargo.status) {
    case CargoStatus.AIRPORT:
      cargos.cargosAirport.push(cargo);
      break;
    case CargoStatus.FLIGHT:
      cargos.cargosFlight.push(cargo);
      break;
    case CargoStatus.OFFLINE:
      cargos.cargosOffline.push(cargo);
      break;

    default:
      break;
  }
};
