import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const MapView: React.FC<any> = ({ mapOptions }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapOptions.mapContainerStyle}
      center={mapOptions.mapCenter}
      options={mapOptions.options}
      zoom={mapOptions.zoom}
    ></GoogleMap>
  );
};

export default MapView;
