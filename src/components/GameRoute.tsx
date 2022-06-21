import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import GameContext from "../context/GameContext";
import Easy from "./Easy";
import "./GameRoute.css";

const GameRoute = () => {
  const [level, setLevel] = useState("easy");
  const { setChallengeLevel, challengeLevel } = useContext(GameContext);
  console.log(challengeLevel);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setChallengeLevel(level);
  };
  return (
    <div className="GameRoute">
      {challengeLevel === "" && (
        <form onSubmit={submitHandler}>
          <select onChange={(e) => setLevel(e.target.value)} value={level}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button>Select</button>
        </form>
      )}
      {challengeLevel === "easy" && <Easy />}
    </div>
  );
};

export default GameRoute;
