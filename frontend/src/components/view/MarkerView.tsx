import { Marker } from "@react-google-maps/api";
import React from "react";
import { IIdentity } from "../../interfaces/types";

type MarkerViewProps = {
  type: string;
  element: IIdentity;
};

const MarkerView: React.FC<MarkerViewProps> = ({ type, element }) => {
  const path = process.env.PUBLIC_URL;

  const setIcon = (type: string): string => {
    switch (type) {
      case "city":
        return `${path}/images/airport.svg`;
      case "enemy":
        return `${path}/images/helicopter.svg`;
      case "cargo-airport":
        return `${path}/images/cargo-airport.svg`;
      case "cargo-flight":
        return `${path}/images/cargo-flight.svg`;
      case "cargo-shooted":
        return `${path}/images/cargo-explosion.svg`;

      default:
        return "";
    }
  };

  const setRotation = (element: IIdentity): number => {
    return "flightAngle" in element ? element["flightAngle"] : 0;
  };

  return (
    <Marker
      icon={{
        url: setIcon(type),
        rotation: setRotation(element),
        scaledSize: { width: 36, height: 36 },
      }}
      position={{ lat: element.location.lat, lng: element.location.lng }}
      onClick={() => console.log(element.name)}
    />
  );
};

export default MarkerView;
