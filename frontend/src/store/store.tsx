import React, { useReducer, createContext } from "react";
import { IAction, IState, IStore } from "../interfaces/context";

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

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

const Store: React.Context<IStore> = createContext<IStore>({
  state: initialState,
  dispatch: (IAction) => {
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
