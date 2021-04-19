import { Polyline } from "@react-google-maps/api";
import React from "react";
import { CargoDTO } from "../../interfaces/types";

type PolylineViewProps = {
  element: CargoDTO;
};

const PolylineView: React.FC<PolylineViewProps> = ({ element }) => {
  const optionsPolyline = {
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    icons: [
      {
        icon: "hello",
        offset: "0",
        repeat: "10px",
      },
    ],
  };

  return (
    <Polyline
      path={[
        { lat: element.start.location.lat, lng: element.start.location.lng },
        { lat: element.end.location.lat, lng: element.end.location.lng },
      ]}
      options={optionsPolyline}
    />
  );
};

export default PolylineView;
