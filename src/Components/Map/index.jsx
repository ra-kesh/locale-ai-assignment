import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useAreaData } from "../../Hooks/useAreaData";

const position = [12.94969, 77.61497];

export const KyupidMap = () => {
  const { style, feature, onEachFeature } = useAreaData();

  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={true}
      style={{ minHeight: "55vh", minWidth: "50vw" }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/rakeshh/ckxoyqs1xarxr15p3mc14qvan/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFrZXNoaCIsImEiOiJja3hrYXNiZDUwc2w2MnFvNWtnczkyYmRjIn0.HT4Iqud4gfAZl0lEn34m_w"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {feature && (
        <GeoJSON data={feature} style={style} onEachFeature={onEachFeature} />
      )}
    </MapContainer>
  );
};
