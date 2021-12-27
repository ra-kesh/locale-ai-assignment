import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const position = [12.94969, 77.61497];

const MapTile = () => {
  return (
    <TileLayer
      url="https://api.mapbox.com/styles/v1/rakeshh/ckxn8q19v2ygx14o5f4k07xu9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFrZXNoaCIsImEiOiJja3hrYXNiZDUwc2w2MnFvNWtnczkyYmRjIn0.HT4Iqud4gfAZl0lEn34m_w"
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    />
  );
};

export const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={true}
      style={{ minHeight: "55vh", minWidth: "50vw" }}
    >
      <MapTile />
    </MapContainer>
  );
};
