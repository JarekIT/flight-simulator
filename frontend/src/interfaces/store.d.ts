import { AirportDTO, EnemyDTO, GroupedCargos } from './types';

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  airportsState: {
    isLoaded: boolean;
    airports: AirportDTO[];
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
