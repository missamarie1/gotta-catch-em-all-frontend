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
    setEffect(true);
    myTimeout = setTimeout(() => {
      setQuestionsAnswered(2);
    }, 1250);

    if (
      currentPokemon?.types &&
      selected2 === currentPokemon?.types[0].type.name
    ) {
      updateScore();
    }
  };

  return (
    <div className="EasyTwo">
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
      {effect && (
        <p className="effect">
          {currentPokemon?.types &&
          selected2 === currentPokemon?.types[0].type.name
            ? "Your attack was super effective!"
            : "Your attack had no effect!"}
        </p>
      )}
      <div className="image-container">
        <img src={player} alt="player" id="player" />
        <img
          src={currentPokemon?.sprites?.front_default}
          alt={currentPokemon?.name}
          id="pokemon"
        />
      </div>
      {currentPokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler} className="question-form">
          <h2>What's it's type?</h2>
          <div className="answer-container">
            <div className="answer">
              <input
                type="radio"
                name="type"
                id={answers[0]}
                onChange={(e) => setSelected2(e.target.value)}
                value={answers[0]}
              />
              <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="type"
                id={answers[1]}
                onChange={(e) => setSelected2(e.target.value)}
                value={answers[1]}
              />
              <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="type"
                id={answers[2]}
                onChange={(e) => setSelected2(e.target.value)}
                value={answers[2]}
              />
              <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="type"
                id={answers[3]}
                onChange={(e) => setSelected2(e.target.value)}
                value={answers[3]}
              />
              <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyTwo;
