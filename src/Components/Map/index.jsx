import React from "react";
import { MapContainer } from "react-leaflet";
import { MapTile } from "./MapTile";

const position = [12.94969, 77.61497];

export const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={true}
      style={{ minHeight: "55vh", minWidth: "50vw" }}
    >
      <MapTile />
    </MapContainer>
  );
};
