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
      case "airport":
        return `${path}/images/airport.svg`;
      case "enemy":
        return `${path}/images/helicopter.svg`;
      case "cargo-airport":
        return `${path}/images/cargo-airport.svg`;
      case "cargo-flight":
        return `${path}/images/cargo-flight.svg`;
      case "cargo-offline":
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
        scaledSize: new google.maps.Size(36, 36),
        anchor: new google.maps.Point(18, 18),
      }}
      position={{ lat: element.location.lat, lng: element.location.lng }}
      onClick={() => console.log(element)}
    />
  );
};

export default MarkerView;
