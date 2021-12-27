import React from "react";
import "./analytics.css";

export const Analytics = () => {
  return (
    <section>
      <div className="analytics">
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total users</h4>
            <h1>10.3M</h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Pro users</h4>
            <h1>
              20.9k <small className="text-danger">5%</small>
            </h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Male users</h4>
            <h1>
              1.3k <small className="text-success">12%</small>
            </h1>
          </div>
        </div>
        <div className="analytic">
          <div className="analytic-info">
            <h4>Total Female users</h4>
            <h1>3.4M</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
