import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Main.css";
import Signup from "./Signup";

const Main = () => {
  const { user, account } = useContext(AuthContext);
  const refreshPage = () => {
    window.location.assign("/difficulty");
  };

  return (
    <div className="Main">
      {!user ? (
        <button className="login" onClick={signInWithGoogle}>
          Login
        </button>
      ) : user && !account ? (
        <Signup usernameProp="" avatarProp="" editMode={false}/>
      ) : (
        <div className="main-menu">
          <Link to="/difficulty">
            <button className="play" onClick={refreshPage}>
              Play
            </button>
          </Link>
          <Link to="/profile">
            <button className="profile">Profile</button>
          </Link>
          <Link to="/leaderboard">
            <button className="leaderboard">LeaderBoard</button>
          </Link>
          <Link to="/meet-the-team">
            <button className="meet-the-team">Meet the Team</button>
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
