import "./App.css";
import { Header, SideBar, Analytics, Map } from "./Components";

function App() {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Header />
        <Analytics />
        <div className="block-grid">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
