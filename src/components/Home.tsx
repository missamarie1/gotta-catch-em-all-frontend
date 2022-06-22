import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/difficulty">
        <button>Play Game</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default Home;
