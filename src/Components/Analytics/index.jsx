import React from "react";
import { useUserData } from "../../Hooks/useUserData";
import "./analytics.css";

export const Analytics = () => {
  const {
    userData,
    totalProUser,
    proUserPercentage,
    totalMaleUser,
    totalFeMaleUser,
    maleUserPercentage,
    femaleUserPercentage,
  } = useUserData();
  return (
    <section>
      <div className="analytics">
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total users</h4>
            <h1>{userData.length}</h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Pro users</h4>
            <h1>
              {totalProUser.length}{" "}
              <small className="text-success">{proUserPercentage}%</small>
            </h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Male users</h4>
            <h1>
              {totalMaleUser.length}{" "}
              <small className="text-success">{maleUserPercentage}%</small>
            </h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Female users</h4>
            <h1>
              {totalFeMaleUser.length}{" "}
              <small className="text-success">{femaleUserPercentage}%</small>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
