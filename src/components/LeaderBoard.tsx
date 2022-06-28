import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Account } from "../models/Account";
import { checkForAccount, getAllAccounts } from "../services/AccountService";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState<Account[]>();
  const [showRivalProfile, setShowRivalProfile] = useState(false);
  const [rivalProfile, setRivalProfile] = useState<Account>();
  const [filter, setFilter] = useState("pokemon");

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
    if (filter === "pokemon") {
      getAllAccounts().then((res) => {
        const sortedArray = res
          .sort((one, other) => {
            return other.caught.length - one.caught.length;
          })
          .slice(0, 10);
        setLeaderboard(sortedArray);
      });
    } else if (filter === "score") {
      getAllAccounts().then((res) => {
        const sortedArray = res
          .sort((one, other) => {
            if (one.totalScore > other.totalScore) {
              return -1;
            } else if (one.totalScore < other.totalScore) {
              return 1;
            } else {
              return 0;
            }
          })
          .slice(0, 10);
        setLeaderboard(sortedArray);
      });
    }
  }, [filter]);

  return (
    <div className="LeaderBoard">
      <h2>LeaderBoard:</h2>
      {filter === "score" ? (
        <button onClick={() => setFilter("pokemon")}>
          Sort by Pokémon Caught
        </button>
      ) : (
        <button onClick={() => setFilter("score")}>
          Sort by Highest Score
        </button>
      )}
      <div className="titles">
        <p>Rank</p>
        <p>Player</p>
        {filter === "score" ? <p>Score</p> : <p>Caught</p>}
      </div>
      <ul className="leaderboard-ul">
        {leaderboard?.map((user, index) => (
          <li
            className="leaderboard-li"
            key={`${user._id}${Math.random()}${index}`}
          >
            <p>{index + 1}.</p>
            <img className="leaderboard-li-img" src={user.avatar} alt="" />
            <div className="leaderboard-player">
              <p onClick={() => renderRivalProfile(user.uid)}>
                {user.userName}
              </p>
            </div>
            {filter === "score" ? (
              <div className="leaderboard-score">
                <p>{user.totalScore}</p>
              </div>
            ) : (
              <div className="leaderboard-caught">
                <p>{user.caught.length}</p>
              </div>
            )}
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
              <li
                className="rival-profile-li"
                key={`${pokemon.id}${Math.random()}${index}`}
              >
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
