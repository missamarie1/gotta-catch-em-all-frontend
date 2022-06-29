import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { getFourOptions } from "../services/Answers";
import { medQThree } from "../services/MedAnswers";
import "./MedThree.css";
import player from "../assets/player.webp";

const MedThree = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
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
    if (currentPokemon) {
      setAnswers(getFourOptions(medQThree, currentPokemon.evolvesTo!));
    }
    return () => {
      clearTimeout(myTimeout);
      setEffect(false);
    };
  }, [currentPokemon]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (selected === currentPokemon?.evolvesTo) {
      updateScore();
    }
    setEffect(true);
    myTimeout = setTimeout(() => {
      setQuestionsAnswered(3);
    }, 1500);
  };

  return (
    <div className="MedThree">
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
              {selected === currentPokemon?.evolvesTo
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
          <h2>What does {currentPokemon.name} evolve to?</h2>
          <div className="answer-container">
            <input
              type="radio"
              name="who"
              id={answers[0]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[0]}
            />
            <label id="answer" htmlFor={answers[0]}>
              {toTitleCase(answers[0])}
            </label>

            <input
              type="radio"
              name="who"
              id={answers[1]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[1]}
            />
            <label id="answer" htmlFor={answers[1]}>
              {toTitleCase(answers[1])}
            </label>

            <input
              type="radio"
              name="who"
              id={answers[2]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[2]}
            />
            <label id="answer" htmlFor={answers[2]}>
              {toTitleCase(answers[2])}
            </label>

            <input
              type="radio"
              name="who"
              id={answers[3]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[3]}
            />
            <label id="answer" htmlFor={answers[3]}>
              {toTitleCase(answers[3])}
            </label>
          </div>
          <button disabled={effect}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default MedThree;
