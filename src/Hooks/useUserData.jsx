import { useContext } from "react";
import { UserContext } from "../Context/user-context";

export const useUserData = () => {
  const { userData } = useContext(UserContext);

  const totalProUser = userData?.filter(
    ({ is_pro_user }) => is_pro_user === true
  );

  const proUserPercentage = (
    (totalProUser.length / userData.length) *
    100
  ).toFixed();

  const totalMaleUser = userData?.filter(({ gender }) => gender === "M");

  const maleUserPercentage = (
    (totalMaleUser.length / userData.length) *
    100
  ).toFixed();

  const totalFeMaleUser = userData?.filter(({ gender }) => gender === "F");

  const femaleUserPercentage = (
    (totalFeMaleUser.length / userData.length) *
    100
  ).toFixed();

  return {
    userData,
    totalProUser,
    proUserPercentage,
    totalMaleUser,
    totalFeMaleUser,
    maleUserPercentage,
    femaleUserPercentage,
  };
};
