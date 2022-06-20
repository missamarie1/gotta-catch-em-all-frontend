import { Link } from "react-router-dom";
import "./GameRoute.css";

const GameRoute = () => {
  return (
    <div className="GameRoute">
      <Link to="/difficulty">Play</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
};

export default GameRoute;
