import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyQTwo, getFourOptions } from "../services/PossibleAnswers";
import "./EasyTwo.css";
import player from "../assets/player.webp";

const EasyTwo = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected2, setSelected2] = useState("");
  const { currentPokemonID, setQuestionsAnswered, updateScore, currentScore } =
    useContext(GameContext);
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
        console.log(res.types[0]);
        setPokemon(res);
        setAnswers(getFourOptions(easyQTwo, res.types[0].type.name));
      });
    }
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (selected2 === pokemon?.types[0].type.name) {
      updateScore();
    }
    setQuestionsAnswered(2);
    console.log(selected2);
    console.log(pokemon?.types[0].type.name);
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
          HP: {getPercent(currentScore)}
        </div>
      </div>
      <div className="image-container">
        <img src={player} alt="player" />
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>

      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>What's it's type?</h2>
          <div className="question-container">
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
