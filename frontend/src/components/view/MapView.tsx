import React, { useState, useCallback } from 'react';
import { GoogleMap } from '@react-google-maps/api';

interface MapViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const MapView: React.FC<MapViewProps> = ({ children }) => {
  // custom map options
  const options = {
    containerStyle: {
      width: '100vw',
      height: '100vh'
    },
    center: {
      lat: 52.2319581,
      lng: 21.0067249
    },
    options: {
      disableDefaultUI: true,
      zoomControl: true
    },
    zoom: 3
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={options.containerStyle}
      options={options.options}
      onLoad={onLoad}
      onUnmount={onUnmount}
      // zoom={map == null ? options.zoom : map.zoom }
      // center={ map == null ? new google.maps.LatLng(20,20) : options.center }
    >
      {children}
    </GoogleMap>
  );
};

export default MapView;
