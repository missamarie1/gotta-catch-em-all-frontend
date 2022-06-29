import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Difficulty from "./components/Difficulty";
import Profile from "./components/Profile";
import LeaderBoard from "./components/LeaderBoard";
import MeetTheTeam from "./components/MeetTheTeam";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/difficulty" element={<Difficulty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
