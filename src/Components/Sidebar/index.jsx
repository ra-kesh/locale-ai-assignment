import React from "react";
import "./Sidebar.css";

export const SideBar = ({ setShow, show }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="brand">
          <h3>Kyupid</h3>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li
              onClick={() => setShow("overview")}
              className={show === "overview" ? "active" : null}
            >
              <span>Overview</span>
            </li>
            <li
              onClick={() => setShow("allUsers")}
              className={show === "allUsers" ? "active" : null}
            >
              <span>Total Users</span>
            </li>
            <li
              onClick={() => setShow("proUsers")}
              className={show === "proUsers" ? "active" : null}
            >
              <span>Pro Users</span>
            </li>
            <li
              onClick={() => setShow("popularUsers")}
              className={show === "popularUsers" ? "active" : null}
            >
              <span>Popular Users</span>
            </li>
            <li
              onClick={() => setShow("maleToFemaleRatio")}
              className={show === "maleToFemaleRatio" ? "active" : null}
            >
              <span>Male to female Ratio</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
