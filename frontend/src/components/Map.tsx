import React, { useContext } from "react";
import { Store } from "../data/store/store";
import { CargoDTO, AirportDTO, EnemyDTO } from "../interfaces/types";
import CircleView from "./view/CircleView";
import MapView from "./view/MapView";
import MarkerView from "./view/MarkerView";
import PolylineView from "./view/PolylineView";

const Map: React.FC = () => {
  const { state } = useContext(Store);
  const { airports } = state.airportsState;
  const { enemies } = state.enemiesState;
  const {
    cargosAirport,
    cargosFlight,
    cargosOffline,
  } = state.cargosState.cargos;

  // custom map options
  const mapOptions = {
    mapContainerStyle: {
      width: "100vw",
      height: "100vh",
    },
    mapCenter: {
      lat: 52.2319581,
      lng: 21.0067249,
    },
    options: {
      disableDefaultUI: true,
      zoomControl: true,
    },
    zoom: 4,
  };

  return (
    <MapView mapOptions={mapOptions}>
      {airports.map((airport: AirportDTO) => {
        return (
          <React.Fragment key={airport.uuid}>
            <MarkerView type="airport" element={airport} />
          </React.Fragment>
        );
      })}

      {enemies.map((enemy: EnemyDTO) => {
        return (
          <React.Fragment key={enemy.uuid}>
            <MarkerView type="enemy" element={enemy} />
            <CircleView element={enemy} />;
          </React.Fragment>
        );
      })}

      {cargosAirport.map((cargo: CargoDTO) => {
        return (
          <MarkerView key={cargo.uuid} type="cargo-airport" element={cargo} />
        );
      })}

      {cargosFlight.map((cargo: CargoDTO) => {
        return (
          <React.Fragment key={cargo.uuid}>
            <MarkerView type="cargo-flight" element={cargo} />
            <PolylineView element={cargo} />;
          </React.Fragment>
        );
      })}

      {cargosOffline.map((cargo: CargoDTO) => {
        return (
          <MarkerView key={cargo.uuid} type="cargo-offline" element={cargo} />
        );
      })}
    </MapView>
  );
};

export default Map;
