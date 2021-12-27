import React from "react";
import { TileLayer, useMap } from "react-leaflet";
import { useAreaData } from "../../Hooks/useAreaData";
import L from "leaflet";

export const MapTile = () => {
  var geojson;

  const map = useMap();
  const { geoJsonAreaData, highlightFeature, style, setIsHovering } =
    useAreaData();

  function resetHighlight(e) {
    setIsHovering(false);
    geojson.resetStyle(e.target);
  }

  function onEachFeature(feature = {}, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      //   click: zoomToFeature,
    });

    const { properties = {} } = feature;
    const { name, pin_code } = properties;

    if (!name || !pin_code) return;

    layer.bindPopup(`<p>${name}(${pin_code})</p>`);
  }

  geojson = L.geoJSON(geoJsonAreaData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);

  // L.geoJSON(geoJsonAreaData, {
  //   style: style,
  //   onEachFeature: onEachFeature,
  // }).addTo(map);

  return (
    <TileLayer
      url="https://api.mapbox.com/styles/v1/rakeshh/ckxoyqs1xarxr15p3mc14qvan/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFrZXNoaCIsImEiOiJja3hrYXNiZDUwc2w2MnFvNWtnczkyYmRjIn0.HT4Iqud4gfAZl0lEn34m_w"
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
    />
  );
};
