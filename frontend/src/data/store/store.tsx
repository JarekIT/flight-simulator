import React, { useReducer, createContext } from "react";
import { IState, IStore } from "../../interfaces/store";
import { reducer } from "../reducers/reducer";

const initialState: IState = {
  cities: {
    isLoaded: false,
    data: [],
    error: null,
  },
  enemies: {
    isLoaded: false,
    data: [],
    error: null,
  },
  cargos: {
    isLoaded: false,
    data: [],
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
