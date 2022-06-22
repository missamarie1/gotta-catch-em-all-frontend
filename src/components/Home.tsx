import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/difficulty">
        <button className="play button">Play Game</button>
      </Link>
      <Link to="/profile">
        <button className="profile button">Profile</button>
      </Link>
    </div>
  );
};

export default Home;
