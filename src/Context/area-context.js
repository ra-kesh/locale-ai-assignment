import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { areaApi } from "../Consts";

export const AreaContext = createContext();

export const AreaProvider = ({ children }) => {
  const [geoJsonAreaData, setGeoJsonAreaData] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const fetchGeoJsonAreaData = async () => {
    try {
      const { data } = await axios.get(areaApi);
      console.log(data);
      setGeoJsonAreaData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGeoJsonAreaData();
  }, []);

  return (
    <AreaContext.Provider
      value={{
        geoJsonAreaData,
        selectedArea,
        setSelectedArea,
        isHovering,
        setIsHovering,
      }}
    >
      {children}
    </AreaContext.Provider>
  );
};
