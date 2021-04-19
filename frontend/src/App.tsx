import { useEffect, useContext } from "react";
import "./App.css";
import Map from "./components/Map";
import { loadCargos } from "./data/actions/cargos.actions";
import { loadCities } from "./data/actions/cities.actions";
import { loadEnemies } from "./data/actions/enemies.actions";
import { Store } from "./data/store/store";

function App() {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    loadCities(dispatch);
    loadEnemies(dispatch);
    loadCargos(dispatch);
    // eslint-disable-next-line
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
