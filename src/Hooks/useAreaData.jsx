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
  } = useContext(AreaContext);

  function highlightFeature(e) {
    var layer = e.target;

    setSelectedArea(layer.feature.properties.area_id);

    setIsHovering(true);

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
      weight: 2,
      opacity: 1,
      // color: "",
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
    style,
  };
};
