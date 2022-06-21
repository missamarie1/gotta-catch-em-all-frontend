import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyThree, getFourOptionsQThree } from "../services/PossibleAnswers";
import "./EasyThree.css";

const EasyThree = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected3, setSelected3] = useState(0);
  const { currentPokemonID, currentScore, updateScore, setQuestionsAnswered } =
    useContext(GameContext);
  const getPercent = (currentScore: number): string => {
    return `${((currentScore / 3) * 100).toFixed(0)}%`;
  };

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
        setAnswers(getFourOptionsQThree(easyThree, res.id));
      });
    }
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (selected3 !== pokemon?.id) {
      updateScore();
    }
    setQuestionsAnswered(3);
    console.log(selected3);
    console.log(pokemon?.id);
  };

  return (
    <div className="EasyThree">
      {currentScore === 3 ? (
        <div className="full hp" style={{ width: getPercent(currentScore) }}>
          Chance to capture: {getPercent(currentScore)}
        </div>
      ) : currentScore === 2 ? (
        <div
          className="two-thirds hp"
          style={{ width: getPercent(currentScore) }}
        >
          Chance to capture: {getPercent(currentScore)}
        </div>
      ) : currentScore === 1 ? (
        <div
          className="one-thirds hp"
          style={{ width: getPercent(currentScore) }}
        >
          Chance to capture: {getPercent(currentScore)}
        </div>
      ) : (
        <div className="zero hp" style={{ width: getPercent(currentScore) }}>
          Chance to capture: {getPercent(currentScore)}
        </div>
      )}
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />

      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>What's it's Pokédex number?</h2>
          <input
            type="radio"
            name="number"
            id={answers[0].toString()}
            onChange={(e) => setSelected3(+e.target.value)}
            value={answers[0]}
          />
          <label htmlFor={answers[0].toString()}>{answers[0]}</label>
          <input
            type="radio"
            name="number"
            id={answers[1].toString()}
            onChange={(e) => setSelected3(+e.target.value)}
            value={answers[1]}
          />
          <label htmlFor={answers[1].toString()}>{answers[1]}</label>
          <input
            type="radio"
            name="number"
            id={answers[2].toString()}
            onChange={(e) => setSelected3(+e.target.value)}
            value={answers[2]}
          />
          <label htmlFor={answers[2].toString()}>{answers[2]}</label>
          <input
            type="radio"
            name="number"
            id={answers[3].toString()}
            onChange={(e) => setSelected3(+e.target.value)}
            value={answers[3]}
          />
          <label htmlFor={answers[3].toString()}>{answers[3]}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyThree;
