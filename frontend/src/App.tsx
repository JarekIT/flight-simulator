import { useEffect, useContext } from "react";
import "./App.css";
import Map from "./components/Map";
import { loadCargos } from "./data/actions/cargos.actions";
import { loadCities } from "./data/actions/cities.actions";
import { loadEnemies } from "./data/actions/enemies.actions";
import { Store } from "./data/store/store";

function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    loadCities(dispatch);
    loadEnemies(dispatch);
    loadCargos(dispatch);
    // eslint-disable-next-line
  }, []);

  console.log(state);

  return (
    <div className="App" data-testid={"app"}>
      <Map />
    </div>
  );
}

export default App;
