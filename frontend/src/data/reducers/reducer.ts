import { IAction, IState } from '../../interfaces/store';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'AIRPORTS_GET_SUCCESS':
      return {
        ...state,
        airportsState: {
          ...state.airportsState,
          isLoaded: true,
          airports: action.payload
        }
      };
    case 'AIRPORTS_GET_FAILURE':
      return {
        ...state,
        airportsState: {
          ...state.airportsState,
          error: action.payload
        }
      };
    case 'ENEMIES_GET_SUCCESS':
      return {
        ...state,
        enemiesState: {
          ...state.enemiesState,
          isLoaded: true,
          enemies: action.payload
        }
      };
    case 'ENEMIES_GET_FAILURE':
      return {
        ...state,
        enemiesState: {
          ...state.enemiesState,
          error: action.payload
        }
      };
    case 'CARGOS_GET_SUCCESS':
      return {
        ...state,
        cargosState: {
          ...state.cargosState,
          isLoaded: true,
          cargos: action.payload
        }
      };
    case 'CARGOS_GET_FAILURE':
      return {
        ...state,
        cargosState: {
          ...state.cargosState,
          error: action.payload
        }
      };
    default:
      return state;
  }
};
