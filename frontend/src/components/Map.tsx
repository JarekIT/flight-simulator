import React from "react";
import MapView from "./view/MapView";

const Map: React.FC = () => {
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
    zoom: 5,
  };

  return <MapView mapOptions={mapOptions}></MapView>;
};

export default Map;
