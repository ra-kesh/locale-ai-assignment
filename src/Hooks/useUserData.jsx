import { useContext } from "react";
import { UserContext } from "../Context/user-context";
import { useAreaData } from "./useAreaData";

export const useUserData = () => {
  const { userData } = useContext(UserContext);

  const { selectedArea } = useAreaData();

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

  const areaUserData = userData?.filter(
    ({ area_id }) => area_id === selectedArea
  );

  const areaProMembers = areaUserData?.filter(
    ({ is_pro_user }) => is_pro_user === true
  );

  const areaPopularMembers = areaUserData?.filter(
    ({ total_matches }) => total_matches >= 5
  );

  const areaMaleUser = areaUserData?.filter(({ gender }) => gender === "M");
  const areaFeMaleUser = areaUserData?.filter(({ gender }) => gender === "F");

  return {
    userData,
    totalProUser,
    proUserPercentage,
    totalMaleUser,
    totalFeMaleUser,
    maleUserPercentage,
    femaleUserPercentage,
    areaUserData,
    areaProMembers,
    areaPopularMembers,
    areaMaleUser,
    areaFeMaleUser,
  };
};
