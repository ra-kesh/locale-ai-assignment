import "./App.css";
import { Header, SideBar, Analytics } from "./Components";

function App() {
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Header />
        <Analytics />
      </div>
    </>
  );
}

export default App;
