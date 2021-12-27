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

  function highlightFeature(e) {
    var layer = e.target;

    setIsHovering(true);
    setSelectedArea(layer.feature.properties.area_id);
    setSelectedAreaName(layer.feature.properties.name);
    setSelectedAreaPin(layer.feature.properties.pin_code);

    layer.setStyle({
      weight: 3,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.1,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function style(feature) {
    return {
      // fillColor: getColor(feature.properties.density),
      // fillColor: "#F28F3B",
      weight: 2,
      opacity: 1,
      // color: "white",
      dashArray: "3",
      fillOpacity: 0.1,
    };
  }

  return {
    geoJsonAreaData,
    selectedArea,
    setSelectedArea,
    isHovering,
    setIsHovering,
    highlightFeature,
    selectedAreaName,
    setSelectedAreaName,
    selectedAreaPin,
    setSelectedAreaPin,
    style,
  };
};
