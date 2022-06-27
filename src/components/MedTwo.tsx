import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { getFourOptions } from "../services/Answers";
import { medPokemon, medQTwo } from "../services/MedAnswers";
import "./MedTwo.css";
import player from "../assets/player.webp";

const MedTwo = () => {
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
      console.log(currentPokemon);

      setAnswers(getFourOptions(medQTwo, currentPokemon.evolvesFrom!));
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
    }, 1500);
    if (selected === currentPokemon?.evolvesFrom) {
      updateScore();
    }
  };

  return (
    <div className="MedTwo">
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
          {selected === currentPokemon?.evolvesFrom
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
          <h2>What does {currentPokemon.name} evolve from?</h2>
          <div className="answer-container">
            <div className="answer">
              <input
                type="radio"
                name="who"
                id={answers[0]}
                onChange={(e) => setSelected(e.target.value)}
                value={answers[0]}
              />
              <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="who"
                id={answers[1]}
                onChange={(e) => setSelected(e.target.value)}
                value={answers[1]}
              />
              <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="who"
                id={answers[2]}
                onChange={(e) => setSelected(e.target.value)}
                value={answers[2]}
              />
              <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="who"
                id={answers[3]}
                onChange={(e) => setSelected(e.target.value)}
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

export default MedTwo;
