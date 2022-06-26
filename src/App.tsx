import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LeaderBoard from "./components/LeaderBoard";
import Difficulty from "./components/Difficulty";
import Profile from "./components/Profile";
import MeetTheTeam from "./components/MeetTheTeam";
import Main from "./components/Main";
import { Howl } from "howler";

function App() {
  // music
  const music = new Howl({
    src: [
      "https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/ncplxpiydy/03%20Title%20Screen.mp3",
    ],
  });

  return (
    <div className="App">
      <i className="fa-solid fa-volume-high" onClick={() => music.play()}></i>
      <i className="fa-solid fa-volume-xmark" onClick={() => music.stop()}></i>
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
