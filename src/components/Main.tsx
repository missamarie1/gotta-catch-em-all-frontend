import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Main.css";
import Signup from "./Signup";
import React from "react";

const Main = () => {
  const { user, account } = useContext(AuthContext);
  const { setQuestionsAnswered, setCurrentScore } = useContext(GameContext);

  const refreshPage = () => {
    window.location.reload();
  };

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
          <button
            className="play"
            onClick={refreshPage}
            // onClick={() => {
            //   setQuestionsAnswered(0);
            //   setCurrentScore(3);
            // }}
          >
            <Link to="/difficulty">Play</Link>
          </button>
          <button className="profile">
            <Link to="/profile">Profile</Link>
          </button>
          <button className="leaderboard">
            <Link to="/leaderboard">LeaderBoard</Link>
          </button>
          <button className="signout" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
