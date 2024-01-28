"use client";

import React from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

// ! this component is just an example of how to use the google maps api, clean up later

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
};

interface MapProps {
  longitude: number;
  latitude: number;
  locationName: string;
}

function MapComponent({ longitude, latitude, locationName }: MapProps) {
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onUnmount={onUnmount}
    >
      <MarkerF position={center} />
      <InfoWindowF
        position={center}
        options={{
          // @ts-ignore
          pixelOffset: {
            width: 0,
            height: -40,
          },
        }}
      >
        <p style={{ color: "black" }}>{locationName}</p>
      </InfoWindowF>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
