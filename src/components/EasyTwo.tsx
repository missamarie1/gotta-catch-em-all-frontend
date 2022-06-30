import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { getFourOptions } from "../services/Answers";
import { easyQTwo } from "../services/EasyAnswers";
import "./EasyTwo.css";
import player from "../assets/player.webp";

const EasyTwo = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected2, setSelected2] = useState("");
  const [effect, setEffect] = useState(false);
  const { currentPokemon, currentScore, setQuestionsAnswered, updateScore } =
    useContext(GameContext);
  const getPercent = (currentScore: number): string => {
    return `${((currentScore / 3) * 100).toFixed(0)}%`;
  };

  let myTimeout: any;

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    if (currentPokemon && currentPokemon.types) {
      setAnswers(getFourOptions(easyQTwo, currentPokemon.types[0].type.name));
    }
    return () => {
      clearTimeout(myTimeout);
      setEffect(false);
    };
  }, [currentPokemon]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (
      currentPokemon?.types &&
      selected2 === currentPokemon?.types[0].type.name
    ) {
      updateScore();
    }
    setEffect(true);
    myTimeout = setTimeout(() => {
      setQuestionsAnswered(2);
    }, 1250);
  };

  return (
    <div className="EasyTwo">
      <div className="battle">
        <div className="hp-container">
          <div
            className={`${
              currentScore === 3
                ? "full"
                : currentScore === 2
                ? "two-thirds"
                : currentScore === 1
                ? "one-thirds"
                : "zero"
            } hp`}
            style={{ width: getPercent(currentScore) }}
          >
            <p className="hp-text">HP: {getPercent(currentScore)}</p>
          </div>
        </div>
        <div className="image-container">
          {effect && (
            <p className="effect">
              {currentPokemon?.types &&
              selected2 === currentPokemon?.types[0].type.name
                ? "Your attack was super effective!"
                : "Your attack had no effect!"}
            </p>
          )}
          <img src={player} alt="player" id="player" />
          <img
            src={currentPokemon?.sprites?.front_default}
            alt={currentPokemon?.name}
            id="pokemon"
          />
        </div>
      </div>
      {currentPokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler} className="question-form">
          <h2>What's {currentPokemon.name}'s main type?</h2>
          <div className="answer-container">
            <input
              type="radio"
              name="type"
              id={answers[0]}
              onChange={(e) => setSelected2(e.target.value)}
              value={answers[0]}
              required
            />
            <label id="answer" htmlFor={answers[0]}>
              {toTitleCase(answers[0])}
            </label>

            <input
              type="radio"
              name="type"
              id={answers[1]}
              onChange={(e) => setSelected2(e.target.value)}
              value={answers[1]}
              required
            />
            <label id="answer" htmlFor={answers[1]}>
              {toTitleCase(answers[1])}
            </label>

            <input
              type="radio"
              name="type"
              id={answers[2]}
              onChange={(e) => setSelected2(e.target.value)}
              value={answers[2]}
              required
            />
            <label id="answer" htmlFor={answers[2]}>
              {toTitleCase(answers[2])}
            </label>

            <input
              type="radio"
              name="type"
              id={answers[3]}
              onChange={(e) => setSelected2(e.target.value)}
              value={answers[3]}
              required
            />
            <label id="answer" htmlFor={answers[3]}>
              {toTitleCase(answers[3])}
            </label>
          </div>
          <button disabled={effect}>Attack</button>
        </form>
      )}
    </div>
  );
};

export default EasyTwo;
