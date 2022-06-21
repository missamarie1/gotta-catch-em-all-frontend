import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyTwo, getFourOptions } from "../services/PossibleAnswers";
import "./EasyTwo.css";

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
        setAnswers(getFourOptions(easyTwo, res.types[0].type.name));
      });
    }
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (selected2 !== pokemon?.types[0].type.name) {
      updateScore();
    }
    setQuestionsAnswered(2);
    console.log(selected2);
    console.log(pokemon?.types[0].type.name);
  };

  return (
    <div className="EasyTwo">
      {currentScore === 3 ? (
        <div
          className="full hp"
          style={{ width: getPercent(currentScore) }}
        ></div>
      ) : currentScore === 2 ? (
        <div
          className="two-thirds hp"
          style={{ width: getPercent(currentScore) }}
        ></div>
      ) : (
        <div
          className="one-thirds hp"
          style={{ width: getPercent(currentScore) }}
        ></div>
      )}
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />

      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>What's it's type?</h2>
          <input
            type="radio"
            name="type"
            id={answers[0]}
            onChange={(e) => setSelected2(e.target.value)}
            value={answers[0]}
          />
          <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
          <input
            type="radio"
            name="type"
            id={answers[1]}
            onChange={(e) => setSelected2(e.target.value)}
            value={answers[1]}
          />
          <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
          <input
            type="radio"
            name="type"
            id={answers[2]}
            onChange={(e) => setSelected2(e.target.value)}
            value={answers[2]}
          />
          <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
          <input
            type="radio"
            name="type"
            id={answers[3]}
            onChange={(e) => setSelected2(e.target.value)}
            value={answers[3]}
          />
          <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyTwo;
