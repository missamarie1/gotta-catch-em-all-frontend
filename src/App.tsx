import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import GameRoute from "./components/GameRoute";
import TopCollectors from "./components/TopCollectors";
import Collector from "./components/Collector";
import EasyOne from "./components/EasyOne";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <EasyOne />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions" element={<GameRoute />} />
          <Route path="/profile" element={<Collector />} />
          <Route path="/" element={<TopCollectors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
