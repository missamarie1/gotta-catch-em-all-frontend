import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <button>
        {" "}
        <Link to="">Login</Link>
      </button>
      <button>
        {" "}
        <Link to="">Sign Up</Link>
      </button>
    </div>
  );
};

export default Main;
