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
      <ol>
        {leaderboard?.map((item) => (
          <li>
            <p>{item.userName}</p>
            <p>{item.caught.length}</p>
          </li>
        ))}
      </ol>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default LeaderBoard;
