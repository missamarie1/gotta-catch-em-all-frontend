import { FormEvent, useContext, useState } from "react";
import GameContext from "../context/GameContext";
import Easy from "./Easy";
import "./Difficulty.css";
import Hard from "./Hard";
import Med from "./Med";

const Difficulty = () => {
  const [level, setLevel] = useState("easy");
  const { setChallengeLevel, challengeLevel, setCaught, setCurrentPokemon } =
    useContext(GameContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setCurrentPokemon(null);
    setCaught(false);
    setChallengeLevel(level);
  };

  return (
    <div className="Difficulty">
      {challengeLevel === "" && (
        <form onSubmit={submitHandler} className="difficulty-form">
          <h2>Select Difficulty:</h2>
          <select onChange={(e) => setLevel(e.target.value)} value={level}>
            <option value="easy">Easy</option>
            <option value="med">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="select button">Select</button>
        </form>
      )}
      {challengeLevel === "easy" && <Easy />}
      {challengeLevel === "med" && <Med />}
      {challengeLevel === "hard" && <Hard />}
    </div>
  );
};

export default Difficulty;
