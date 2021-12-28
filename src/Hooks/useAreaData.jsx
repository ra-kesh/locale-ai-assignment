import { useContext } from "react";
import { AreaContext } from "../Context/area-context";
import L from "leaflet";

export const useAreaData = () => {
  const {
    geoJsonAreaData,
    selectedArea,
    setSelectedArea,
    isHovering,
    setIsHovering,
    selectedAreaName,
    setSelectedAreaName,
    selectedAreaPin,
    setSelectedAreaPin,
  } = useContext(AreaContext);

  var geojson;

  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      // color: "white",
      dashArray: "3",
      fillOpacity: 0.4,
      // fillColor: getColor(feature.properties.density)
    };
  }

  const feature = geoJsonAreaData?.features?.map((feature) => {
    return feature;
  });

  function resetHighlight(e) {
    setIsHovering(false);
    geojson.resetStyle(e.target);
  }

  function highlightFeature(e) {
    var layer = e.target;

    setIsHovering(true);
    setSelectedArea(layer.feature.properties.area_id);
    setSelectedAreaName(layer.feature.properties.name);
    setSelectedAreaPin(layer.feature.properties.pin_code);

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function onEachFeature(feature = {}, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });

    const { properties = {} } = feature;
    const { name, pin_code } = properties;

    if (!name || !pin_code) return;

    layer.bindPopup(`<p>${name}(${pin_code})</p>`);
  }

  geojson = L.geoJSON(geoJsonAreaData);

  return {
    geoJsonAreaData,
    selectedArea,
    setSelectedArea,
    isHovering,
    setIsHovering,
    selectedAreaName,
    setSelectedAreaName,
    selectedAreaPin,
    setSelectedAreaPin,
    onEachFeature,
    feature,
    style,
  };
};
