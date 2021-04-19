import { Circle } from "@react-google-maps/api";
import React from "react";
import { IIdentity } from "../../interfaces/types";

type CircleViewProps = {
  element: IIdentity;
};

const CircleView: React.FC<CircleViewProps> = ({ element }) => {
  const optionsCircle = {
    strokeColor: "#ff0000",
  };

  const setRadius = (): number => {
    return "fireRange" in element ? element["fireRange"] * 1000 : 0;
  };

  return (
    <Circle
      center={{ lat: element.location.lat, lng: element.location.lng }}
      radius={setRadius()}
      options={optionsCircle}
    />
  );
};

export default CircleView;
