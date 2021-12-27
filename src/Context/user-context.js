import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { userApi } from "../Consts";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(userApi);
      setUserData(data.users);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};
