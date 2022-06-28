import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { getFourOptionsQThree } from "../services/Answers";
import { easyQthree } from "../services/EasyAnswers";
import "./EasyThree.css";
import player from "../assets/player.webp";

const EasyThree = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected3, setSelected3] = useState(0);
  const [effect, setEffect] = useState(false);
  const { currentPokemon, currentScore, setQuestionsAnswered, updateScore } =
    useContext(GameContext);
  const getPercent = (currentScore: number): string => {
    return `${((currentScore / 3) * 100).toFixed(0)}%`;
  };

  let myTimeout: any;

  useEffect(() => {
    if (currentPokemon) {
      setAnswers(getFourOptionsQThree(easyQthree, currentPokemon.id));
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
      setQuestionsAnswered(3);
    }, 1250);
    if (selected3 === currentPokemon?.id) {
      updateScore();
    }
  };

  return (
    <div className="EasyThree">
      <div>
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
          {selected3 === currentPokemon?.id
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
      </div>
      {currentPokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler} className="question-form">
          <h2>What's {currentPokemon.name}'s' Pokédex number?</h2>
          <div className="answer-container">
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[0].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[0]}
              />
              <label htmlFor={answers[0].toString()}>{answers[0]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[1].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[1]}
              />
              <label htmlFor={answers[1].toString()}>{answers[1]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[2].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[2]}
              />
              <label htmlFor={answers[2].toString()}>{answers[2]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[3].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[3]}
              />
              <label htmlFor={answers[3].toString()}>{answers[3]}</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyThree;
