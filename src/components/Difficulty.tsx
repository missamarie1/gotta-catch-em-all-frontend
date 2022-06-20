import { Link } from "react-router-dom";
import "./Difficulty.css";

const Difficulty = () => {
  return (
    <div className="Difficulty">
      <Link to="/easy">
        <button>Easy</button>
      </Link>
      <Link to="/medium">
        <button>Medium</button>
      </Link>
      <Link to="/hard">
        <button>Hard</button>
      </Link>
    </div>
  );
};

export default Difficulty;
