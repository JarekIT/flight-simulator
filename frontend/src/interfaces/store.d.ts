export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  cities: {
    isLoaded: boolean;
    data: any[];
    error: null | string;
  };
  enemies: {
    isLoaded: boolean;
    data: any[];
    error: null | string;
  };
  cargos: {
    isLoaded: boolean;
    data: any[];
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
