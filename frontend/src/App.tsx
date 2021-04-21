import React, { useEffect, useContext } from "react";
import "./App.css";
import Map from "./components/Map";
import { loadCargos } from "./data/actions/cargos.actions";
import { loadAirports } from "./data/actions/airports.actions";
import { loadEnemies } from "./data/actions/enemies.actions";
import { Store } from "./data/store/store";

import { openSocketConnection } from "./data/socket/socket";

function App() {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    loadAirports(dispatch);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    openSocketConnection();
  }, []);

  useEffect(() => {
    setInterval(() => {
      loadEnemies(dispatch);
      loadCargos(dispatch);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App" data-testid={"app"}>
      <Map />
    </div>
  );
}

export default App;
