import React from "react";
import "./Sidebar.css";

export const SideBar = ({ setShow }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="brand">
          <h3>Kyupid</h3>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li onClick={() => setShow("overview")}>
              <span>Overview</span>
            </li>
            <li onClick={() => setShow("allUsers")}>
              <span>Total Users</span>
            </li>
            <li onClick={() => setShow("proUsers")}>
              <span>Pro Users</span>
            </li>
            <li onClick={() => setShow("popularUsers")}>
              <span>Popular Users</span>
            </li>
            <li onClick={() => setShow("maleToFemaleRatio")}>
              <span>Male to female Ratio</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
