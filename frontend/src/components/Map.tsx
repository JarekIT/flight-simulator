import React, { useContext } from 'react';
import { Store } from '../data/store/store';
import { PolylineType } from '../interfaces/enum';
import { CargoDTO, AirportDTO, EnemyDTO } from '../interfaces/types';
import CircleView from './view/CircleView';
import MapView from './view/MapView';
import MarkerView from './view/MarkerView';
import PolylineView from './view/PolylineView';

const Map: React.FC = () => {
  const { state } = useContext(Store);
  const { airports } = state.airportsState;
  const { enemies } = state.enemiesState;
  const { cargosAirport, cargosFlight, cargosOffline } = state.cargosState.cargos;

  return (
    <MapView>
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
        return <MarkerView key={cargo.uuid} type="cargo-airport" element={cargo} />;
      })}

      {cargosFlight.map((cargo: CargoDTO) => {
        return (
          <React.Fragment key={cargo.uuid}>
            <MarkerView type="cargo-flight" element={cargo} />
            {/* <PolylineView element={cargo} type={PolylineType.STRAIGHT_LINE} />; */}
            <PolylineView element={cargo} type={PolylineType.TRAVELED} />;
            {/* <PolylineView element={cargo} type={PolylineType.LEFT} />; */}
          </React.Fragment>
        );
      })}

      {cargosOffline.map((cargo: CargoDTO) => {
        return <MarkerView key={cargo.uuid} type="cargo-offline" element={cargo} />;
      })}
    </MapView>
  );
};

export default Map;
