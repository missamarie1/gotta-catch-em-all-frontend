import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Account } from "../models/Account";
import { checkForAccount, getAllAccounts } from "../services/AccountService";
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
    checkForAccount(uid).then((res) => {
      setRivalProfile(res[0]);
      console.log(res);
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
      <ul className="leaderboard-ul">
        {leaderboard?.map((user, index) => (
          <li className="leaderboard-li">
            <p>{index + 1}.</p>
            <img className="leaderboard-li-img" src={user.avatar} alt="" />
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
          <img
            className="rival-avatar"
            src={rivalProfile?.avatar}
            alt={rivalProfile?.avatar}
          />
          <p>Pokemon Collection:</p>
          <ul className="rival-profile-ul">
            {rivalProfile?.caught.map((pokemon, index) => (
              <li className="rival-profile-li" key={pokemon.id + index}>
                <img
                  className="rival-profile-img"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <p>{toTitleCase(pokemon.name)}</p>
              </li>
            ))}
          </ul>
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
