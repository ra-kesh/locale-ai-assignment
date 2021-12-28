import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useAreaData } from "../../Hooks/useAreaData";
import { useUserData } from "../../Hooks/useUserData";

const position = [12.94969, 77.61497];

export const KyupidMap = ({ show }) => {
  const { feature, onEachFeature } = useAreaData();

  const { userData } = useUserData();

  function getColor(a) {
    const areaUser = userData.filter(({ area_id }) => area_id === a);
    const areaMaleUser = areaUser?.filter(({ gender }) => gender === "M");
    const areaFeMaleUser = areaUser?.filter(({ gender }) => gender === "F");

    const maleToFemaleRatio =
      areaMaleUser.length / areaFeMaleUser.length.toFixed(2);

    const areaProMembers = areaUser?.filter(
      ({ is_pro_user }) => is_pro_user === true
    );

    const areaPopularMembers = areaUser?.filter(
      ({ total_matches }) => total_matches >= 5
    );

    if (show === "proUsers") {
      return areaProMembers.length > 150
        ? "#7a0177"
        : areaProMembers.length > 130
        ? "#ae017e"
        : areaProMembers.length > 100
        ? "#dd3497"
        : areaProMembers.length > 80
        ? "#f768a1"
        : areaProMembers.length > 60
        ? "#fa9fb5"
        : areaProMembers.length > 40
        ? "#fcc5c0"
        : areaProMembers.length > 20
        ? "#fde0dd"
        : "#fff7f3";
    }

    if (show === "maleToFemaleRatio") {
      return maleToFemaleRatio > 10
        ? "#000"
        : maleToFemaleRatio > 4
        ? "#67000d"
        : maleToFemaleRatio > 1.4
        ? "#a50f15"
        : maleToFemaleRatio > 1.2
        ? "#cb181d"
        : maleToFemaleRatio > 1
        ? "#ef3b2c"
        : maleToFemaleRatio > 0.8
        ? "#fb6a4a"
        : maleToFemaleRatio > 0.6
        ? "#fc9272"
        : maleToFemaleRatio > 0.4
        ? "#fcbba1"
        : maleToFemaleRatio > 0.2
        ? "#fee0d2"
        : maleToFemaleRatio > 0.1
        ? "#fff5f0"
        : "#FFF";
    }

    if (show === "allUsers") {
      return areaUser.length > 300
        ? "#08306b"
        : areaUser.length > 270
        ? "#08519c"
        : areaUser.length > 240
        ? "#2171b5"
        : areaUser.length > 210
        ? "#4292c6"
        : areaUser.length > 180
        ? "#6baed6"
        : areaUser.length > 150
        ? "#9ecae1"
        : areaUser.length > 120
        ? "#c6dbef"
        : areaUser.length > 90
        ? "#deebf7"
        : areaUser.length > 60
        ? "#f7fbff"
        : areaUser.length > 30
        ? "#fff5f0"
        : "#FFF";
    }

    if (show === "popularUsers") {
      return areaPopularMembers.length > 150
        ? "#00441b"
        : areaPopularMembers.length > 130
        ? "#006d2c"
        : areaPopularMembers.length > 100
        ? "#238b45"
        : areaPopularMembers.length > 70
        ? "#41ae76"
        : areaPopularMembers.length > 50
        ? "#66c2a4"
        : areaPopularMembers.length > 30
        ? "#99d8c9"
        : areaPopularMembers.length > 10
        ? "#ccece6"
        : "#e5f5f9";
    }
  }

  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      // color: "white",
      dashArray: "3",
      fillOpacity: 0.4,
      fillColor: getColor(feature.properties.area_id),
    };
  }

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
