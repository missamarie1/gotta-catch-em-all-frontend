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
  const { currentPokemonID, setQuestionedAnswered, updateScore, currentScore } =
    useContext(GameContext);
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
    if (selected2 === pokemon?.types[0].type.name) {
      updateScore();
    }
    setQuestionedAnswered(2);
  };

  return (
    <div className="EasyTwo">
      <p>{currentScore}</p>
      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>What's it's type?</h2>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <input
            type="radio"
            name="who"
            id={answers[0]}
            onChange={(e) => setSelected2(e.target.value)}
            value={selected2}
          />
          <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
          <input
            type="radio"
            name="who"
            id={answers[1]}
            onChange={(e) => setSelected2(e.target.value)}
            value={selected2}
          />
          <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
          <input
            type="radio"
            name="who"
            id={answers[2]}
            onChange={(e) => setSelected2(e.target.value)}
            value={selected2}
          />
          <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
          <input
            type="radio"
            name="who"
            id={answers[3]}
            onChange={(e) => setSelected2(e.target.value)}
            value={selected2}
          />
          <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyTwo;
