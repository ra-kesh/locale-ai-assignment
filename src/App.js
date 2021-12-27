import "./App.css";
import { Header, SideBar, Analytics, Map, Details } from "./Components";

function App() {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Header />
        <Analytics />
        <div className="block-grid">
          <div className="map-container">
            <Map />
          </div>
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
