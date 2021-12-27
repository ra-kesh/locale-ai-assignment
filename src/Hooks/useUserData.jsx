import { useContext } from "react";
import { UserContext } from "../Context/user-context";

export const useUserData = () => {
  const { userData } = useContext(UserContext);
  return {
    userData,
  };
};
