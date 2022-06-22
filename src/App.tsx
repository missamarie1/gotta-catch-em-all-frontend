import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopCollectors from "./components/TopCollectors";
import Collector from "./components/Collector";
import EasyOne from "./components/EasyOne";
import Home from "./components/Home";
import AccountSetup from "./components/AccountSetup";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AccountSetup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Collector />} />
          <Route path="/leaderboard" element={<TopCollectors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
