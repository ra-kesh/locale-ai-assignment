import React from "react";
import "./Sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="brand">
          <h3>Kyupid</h3>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <span>Overview</span>
            </li>
            <li>
              <span>Pro Users</span>
            </li>
            <li>
              <span>Male female Ratio</span>
            </li>
            <li>
              <span>Number of Users</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
