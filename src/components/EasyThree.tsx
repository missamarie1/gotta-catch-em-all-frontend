import { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyThree, getFourOptionsQThree } from "../services/PossibleAnswers";
import "./EasyThree.css";

const EasyThree = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<number[]>([]);
  const { currentPokemonID } = useContext(GameContext);

  useEffect(() => {
    getRandomEasy(currentPokemonID).then((res) => {
      console.log(res);
      setPokemon(res);
      setAnswers(getFourOptionsQThree(easyThree, res.id));
    });
  }, []);

  return (
    <div className="EasyThree">
      {pokemon && answers?.length > 0 && (
        <form>
          <h2>What's it's Pokédox number?</h2>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <input type="radio" name="who" id={answers[0].toString()} />
          <label htmlFor={answers[0].toString()}>{answers[0]}</label>
          <input type="radio" name="who" id={answers[1].toString()} />
          <label htmlFor={answers[1].toString()}>{answers[1]}</label>
          <input type="radio" name="who" id={answers[2].toString()} />
          <label htmlFor={answers[2].toString()}>{answers[2]}</label>
          <input type="radio" name="who" id={answers[3].toString()} />
          <label htmlFor={answers[3].toString()}>{answers[3]}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyThree;
