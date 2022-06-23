import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Main.css";
import Signup from "./Signup";

const Main = () => {
  const { user, account } = useContext(AuthContext);
  const { setQuestionsAnswered, setCurrentScore } = useContext(GameContext);
  return (
    <div className="Main">
      {!user ? (
        <button className="login" onClick={signInWithGoogle}>
          Login
        </button>
      ) : user && !account ? (
        <Signup />
      ) : (
        <div className="Main">
          <Link to="/difficulty">
            <button
              className="play"
              onClick={() => {
                setQuestionsAnswered(0);
                setCurrentScore(3);
              }}
            >
              Play
            </button>
          </Link>
          <Link to="/profile">
            <button className="profile">Profile</button>
          </Link>
          <Link to="/leaderboard">
            <button className="leaderboard">LeaderBoard</button>
          </Link>
          <button className="signout" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
