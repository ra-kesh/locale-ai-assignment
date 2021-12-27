import React, { useState, useEffect } from "react";
import { useAreaData } from "../../Hooks/useAreaData";
import { useUserData } from "../../Hooks/useUserData";

export const Details = () => {
  const [proMemberPercentage, setProMemberPercentage] = useState();
  const [maleFemaleRatio, setMaleFemaleRatio] = useState();

  const { selectedArea, isHovering } = useAreaData();
  const { userData } = useUserData();

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

  useEffect(() => {
    if (areaUserData.length <= 0 && areaProMembers.length <= 0) return;
    setProMemberPercentage(
      ((areaProMembers.length / areaUserData.length) * 100).toFixed()
    );
  }, [areaUserData.length, areaProMembers.length, setProMemberPercentage]);

  useEffect(() => {
    if (areaMaleUser.length <= 0 && areaFeMaleUser.length <= 0) return;
    setMaleFemaleRatio(
      (areaMaleUser.length / areaFeMaleUser.length).toFixed(2)
    );
  }, [areaMaleUser, areaFeMaleUser, setMaleFemaleRatio]);

  return (
    <div>
      <h1>Area Details</h1>
      {isHovering ? (
        <>
          <h4>Total Members In Area</h4>
          <h2>{areaUserData.length}</h2>
          <h4>Pro Members In Area</h4>
          <h2>
            {areaProMembers.length}({proMemberPercentage}%)
          </h2>
          <h4>Male Female Ratio in Area</h4>
          <h2>{maleFemaleRatio} </h2>
          <h4>Popular Members in Area</h4>
          <h2>{areaPopularMembers.length}</h2>
        </>
      ) : (
        <h4>hover on map to see details</h4>
      )}
    </div>
  );
};
