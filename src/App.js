import "./App.css";
import { Header, SideBar, Analytics, KyupidMap, Details } from "./Components";

function App() {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Header />
        <Analytics />
        <div className="block-grid">
          <div className="map-container">
            <KyupidMap />
          </div>
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
