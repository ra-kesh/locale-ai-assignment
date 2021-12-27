import { useContext } from "react";
import { AreaContext } from "../Context/area-context";

export const useAreaData = () => {
  const { geoJsonAreaData } = useContext(AreaContext);

  return {
    geoJsonAreaData,
  };
};
