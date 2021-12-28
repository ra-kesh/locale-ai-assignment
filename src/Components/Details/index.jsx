import React, { useState, useEffect } from "react";
import { useAreaData } from "../../Hooks/useAreaData";
import { useUserData } from "../../Hooks/useUserData";
import "./details.css";

export const Details = () => {
  const [proMemberPercentage, setProMemberPercentage] = useState();
  const [maleFemaleRatio, setMaleFemaleRatio] = useState();

  const { isHovering, selectedAreaName } = useAreaData();
  const {
    areaUserData,
    areaProMembers,
    areaPopularMembers,
    areaMaleUser,
    areaFeMaleUser,
  } = useUserData();

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
    <div className="details">
      <h1>Area Details</h1>
      {isHovering ? (
        <div style={{ marginTop: "1rem" }}>
          <h4>Name of the Area</h4>
          <h2>{selectedAreaName}</h2>
          <h4>Total Users In Area</h4>
          <h2>{areaUserData.length}</h2>
          <h4>Pro Users In Area</h4>
          <h2>
            {areaProMembers.length}({proMemberPercentage}%)
          </h2>
          <h4>Male to Female Ratio in Area</h4>
          <h2>{maleFemaleRatio} </h2>
          <h4>Popular Users in Area</h4>
          <h2>{areaPopularMembers.length}</h2>
        </div>
      ) : (
        <h4>hover on map to see details</h4>
      )}
    </div>
  );
};
