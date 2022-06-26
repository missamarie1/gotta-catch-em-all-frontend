import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonMed } from "../models/PokemonMed";
import { getRandomMed } from "../services/PokemonService";
import { getFourOptions } from "../services/Answers";
import { medQOne } from "../services/MedAnswers";
import "./MedOne.css";
import player from "../assets/player.webp";

const MedOne = () => {
  const [pokemon, setPokemon] = useState<PokemonMed>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [effect, setEffect] = useState(false);
  const { currentPokemonID, currentScore, setQuestionsAnswered, updateScore } =
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
    if (currentPokemonID) {
      getRandomMed(currentPokemonID).then((res) => {
        setPokemon(res);
        setAnswers(getFourOptions(medQOne, res.name));
      });
    }
    return () => {
      clearTimeout(myTimeout);
      setEffect(false);
    };
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setEffect(true);
    myTimeout = setTimeout(() => {
      setQuestionsAnswered(1);
    }, 1500);
    if (selected === pokemon?.name) {
      updateScore();
    }
  };

  return (
    <div className="MedOne">
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
          {selected === pokemon?.name
            ? "Your attack was super effective!"
            : "Your attack had no effect!"}
        </p>
      )}
      <div className="image-container">
        <img src={player} alt="player" id="player" />
        {/* <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          id="pokemon"
        /> */}
      </div>
      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler} className="question-form">
          <h2>Who's that Pokémon?</h2>
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

export default MedOne;
