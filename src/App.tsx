import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopCollectors from "./components/TopCollectors";
import Home from "./components/Home";
import AccountSetup from "./components/AccountSetup";
import Difficulty from "./components/Difficulty";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AccountSetup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/difficulty" element={<Difficulty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<TopCollectors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
