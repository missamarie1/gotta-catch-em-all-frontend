import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Account } from "../models/Account";
import { getAllAccounts } from "../services/AccountService";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const { account } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState<Account[]>();
  useEffect(() => {
    getAllAccounts().then((res) => {
      console.log(res);

      const sortedArray = res
        .sort((one, other) => {
          return other.caught.length - one.caught.length;
        })
        .slice(0, 10);
      console.log(sortedArray);

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
        {leaderboard?.map((item, index) => (
          <li>
            <p>{index + 1}.</p>
            <img src={item.avatar} alt="" />
            <div className="leaderboard-player">
              <p>{item.userName}</p>
            </div>
            <div className="leaderboard-score">
              <p>{item.caught.length}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default LeaderBoard;
