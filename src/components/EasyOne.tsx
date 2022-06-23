import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyQOne, getFourOptions } from "../services/PossibleAnswers";
import "./EasyOne.css";
import player from "../assets/player.webp";

const EasyOne = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const {
    currentScore,
    updateScore,
    setCurrentPokemonID,
    questionsAnswered,
    setQuestionsAnswered,
    currentPokemonID,
  } = useContext(GameContext);
  const navigate = useNavigate();
  const getPercent = (currentScore: number): string => {
    return `${((currentScore / 3) * 100).toFixed(0)}%`;
  };

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
        setAnswers(getFourOptions(easyQOne, res.name));
      });
    }
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (selected === pokemon?.name) {
      updateScore();
    }
    setQuestionsAnswered(1);
    console.log(getPercent(currentScore));
  };

  return (
    <div className="EasyOne">
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
          HP: {getPercent(currentScore)}
        </div>
      </div>
      <div className="image-container">
        <img src={player} alt="player" />
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <div className="question-container">
            <h2>Who's that Pokémon?</h2>
            <input
              type="radio"
              name="who"
              id={answers[0]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[0]}
            />
            <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
            <input
              type="radio"
              name="who"
              id={answers[1]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[1]}
            />
            <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
            <input
              type="radio"
              name="who"
              id={answers[2]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[2]}
            />
            <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
            <input
              type="radio"
              name="who"
              id={answers[3]}
              onChange={(e) => setSelected(e.target.value)}
              value={answers[3]}
            />
            <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyOne;
