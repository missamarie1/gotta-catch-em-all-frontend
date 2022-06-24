import { FormEvent, useContext, useState } from "react";
import GameContext from "../context/GameContext";
import Easy from "./Easy";
import "./Difficulty.css";

const Difficulty = () => {
  const [level, setLevel] = useState("easy");
  const { setChallengeLevel, challengeLevel, setGameInProgress } =
    useContext(GameContext);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setChallengeLevel(level);
    setGameInProgress(true);
  };
  return (
    <div className="Difficulty">
      {challengeLevel === "" && (
        <form onSubmit={submitHandler} className="difficulty-form">
          <h2>Select Difficulty:</h2>
          <select onChange={(e) => setLevel(e.target.value)} value={level}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="select button">Select</button>
        </form>
      )}
      {challengeLevel === "easy" && <Easy />}
    </div>
  );
};

export default Difficulty;
