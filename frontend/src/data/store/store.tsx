import React, { useReducer, createContext } from "react";
import { IState, IStore } from "../../interfaces/store";
import { reducer } from "../reducers/reducer";

const initialState: IState = {
  citiesState: {
    isLoaded: false,
    cities: [],
    error: null,
  },
  enemiesState: {
    isLoaded: false,
    enemies: [],
    error: null,
  },
  cargosState: {
    isLoaded: false,
    cargos: {
      cargosAirport: [],
      cargosFlight: [],
      cargosOffline: [],
    },
    error: null,
  },
};

const Store: React.Context<IStore> = createContext<IStore>({
  state: initialState,
  dispatch: () => {
    throw new Error("Context Must Be initialized");
  },
});

function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

export { Store, StoreProvider };
