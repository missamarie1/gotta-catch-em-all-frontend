import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import GameRoute from "./components/GameRoute";
import TopCollectors from "./components/TopCollectors";
import Collector from "./components/Collector";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Collector />} />
          <Route path="/questiobs" element={<GameRoute />} />
          <Route path="/" element={<TopCollectors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
