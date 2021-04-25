import { Polyline } from '@react-google-maps/api';
import React from 'react';
import { PolylineType } from '../../interfaces/enum';
import { CargoDTO } from '../../interfaces/types';

type PolylineViewProps = {
  element: CargoDTO;
  type: PolylineType;
};

const PolylineView: React.FC<PolylineViewProps> = ({ element, type }) => {
  const polylineOptions = {
    LEFT: {
      strokeColor: 'yellow',
      path: [
        // { lat: element.start.location.lat, lng: element.start.location.lng },
        { lat: element.location.lat, lng: element.location.lng },
        { lat: element.end.location.lat, lng: element.end.location.lng }
      ]
    },
    STRAIGHT_LINE: {
      strokeColor: 'red',
      path: [
        { lat: element.start.location.lat, lng: element.start.location.lng },
        { lat: element.end.location.lat, lng: element.end.location.lng }
      ]
    },
    TRAVELED: {
      strokeColor: 'green',
      path: element.flightPath
    }
  };

  const optionsPolyline = ({
    strokeColor: polylineOptions[type].strokeColor,
    strokeOpacity: 1,
    strokeWeight: 2,
    icons: [
      {
        icon: 'hello',
        offset: '0',
        repeat: '10px'
      }
    ]
  } as unknown) as google.maps.PolylineOptions;

  return <Polyline path={polylineOptions[type].path} options={optionsPolyline} />;
};

export default PolylineView;
