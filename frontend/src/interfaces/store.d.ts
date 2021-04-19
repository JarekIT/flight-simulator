import { CargoDTO, CityDTO, EnemyDTO, GroupedCargos } from "./types";

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  citiesState: {
    isLoaded: boolean;
    cities: CityDTO[];
    error: null | string;
  };
  enemiesState: {
    isLoaded: boolean;
    enemies: EnemyDTO[];
    error: null | string;
  };
  cargosState: {
    isLoaded: boolean;
    cargos: GroupedCargos;
    error: null | string;
  };
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
