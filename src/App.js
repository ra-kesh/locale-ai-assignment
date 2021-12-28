import { useState } from "react";
import "./App.css";
import { Header, SideBar, Analytics, KyupidMap, Details } from "./Components";

function App() {
  const [show, setShow] = useState("overview");
  return (
    <>
      <SideBar setShow={setShow} />
      <div className="main-content">
        <Header />
        <Analytics />
        <div className="block-grid">
          <div className="map-container">
            <KyupidMap show={show} />
          </div>
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
