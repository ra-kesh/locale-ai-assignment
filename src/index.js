import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AreaProvider } from "./Context/area-context";
import { UserProvider } from "./Context/user-context";

ReactDOM.render(
  <React.StrictMode>
    <AreaProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AreaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
