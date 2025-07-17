import Header from "./components/Header";
import Home from "./components/HomePage";
import About from "./components/AboutPage";
import PackingPlanner from "./components/PackingPlanPage";
import CampsitePlanner from "./components/CampsitePlanPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyTripDisplay from "./components/DisplayPage";

function App() {
  return (
    <>
      <Router>
        <div id="page-layout">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packinglist" element={<PackingPlanner />}/>
            <Route path="/mytrip" element={<MyTripDisplay />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
