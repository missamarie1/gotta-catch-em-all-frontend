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
      <p className="click">(Click on a player to view their profile)</p>
      {filter === "score" ? (
        <button className="sort" onClick={() => setFilter("pokemon")}>
          Sort by Pokémon Caught
        </button>
      ) : (
        <button className="sort" onClick={() => setFilter("score")}>
          Sort by Highest Score
        </button>
      )}
      <table className="leaderboard">
        <tbody>
          <tr className="headers">
            <th>Rank</th>
            <th>Player</th>
            {filter === "score" ? <th>Score</th> : <th>Caught</th>}
          </tr>
          {leaderboard?.map((user, index) => (
            <tr
              className="player-profile"
              key={`${user._id}${Math.random()}${index}`}
              onClick={() => renderRivalProfile(user.uid)}
            >
              <td>{index + 1}.</td>
              <td className="player">
                <img className="player-img" src={user.avatar} alt="" />
                <p className="player-name">{user.userName}</p>
              </td>

              {filter === "score" ? (
                <td className="score-num">{user.totalScore}</td>
              ) : (
                <td className="caught-num">{user.caught.length}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
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
                  className="rival-profile-pokemon"
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
