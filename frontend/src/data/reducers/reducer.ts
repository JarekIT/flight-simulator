import { IAction, IState } from "../../interfaces/store";

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "CITIES_GET_SUCCESS":
      return {
        ...state,
        cities: {
          ...state.cities,
          isLoaded: true,
          data: action.payload,
        },
      };
    case "CITIES_GET_FAILURE":
      return {
        ...state,
        cities: {
          ...state.cities,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
