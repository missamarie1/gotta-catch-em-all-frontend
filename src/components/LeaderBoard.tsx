import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Account } from "../models/Account";
import { getAccount, getAllAccounts } from "../services/AccountService";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState<Account[]>();
  const [showRivalProfile, setShowRivalProfile] = useState(false);
  const [rivalProfile, setRivalProfile] = useState<Account>();

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const renderRivalProfile = (uid: string): void => {
    setShowRivalProfile(true);
    getAccount(uid).then((res) => {
      setRivalProfile(res);
    });
  };

  useEffect(() => {
    getAllAccounts().then((res) => {
      const sortedArray = res
        .sort((one, other) => {
          return other.caught.length - one.caught.length;
        })
        .slice(0, 10);
      setLeaderboard(sortedArray);
    });
  }, []);

  return (
    <div className="LeaderBoard">
      <h2>LeaderBoard:</h2>
      <div className="titles">
        <p>Rank</p>
        <p>Player</p>
        <p>Score</p>
      </div>
      <ul>
        {leaderboard?.map((user, index) => (
          <li>
            <p>{index + 1}.</p>
            <img src={user.avatar} alt="" />
            <div className="leaderboard-player">
              <p onClick={() => renderRivalProfile(user.uid)}>
                {user.userName}
              </p>
            </div>
            <div className="leaderboard-score">
              <p>{user.caught.length}</p>
            </div>
          </li>
        ))}
      </ul>
      {showRivalProfile && (
        <div className="rival-profile">
          <h2>{rivalProfile?.userName}</h2>
          <img src={rivalProfile?.avatar} alt={rivalProfile?.avatar} />
          <p>Pokemon Caught: {rivalProfile?.caught.length}</p>
          <button onClick={() => setShowRivalProfile(false)}>Close</button>
        </div>
      )}
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default LeaderBoard;
