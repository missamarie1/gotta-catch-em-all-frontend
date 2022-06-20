import { useEffect, useState } from "react";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyQOne, getFourOptions } from "../services/PossibleAnswers";
import "./EasyOne.css";

const EasyOne = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<string[]>([]);
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    getRandomEasy().then((res) => {
      console.log(res);
      setPokemon(res);
      setAnswers(getFourOptions(easyQOne, res.name));
    });
  }, []);

  return (
    <div className="EasyOne">
      {pokemon && answers?.length > 0 && (
        <form>
          <h2>Who's that Pokémon?</h2>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <input type="radio" name="who" id={answers[0]} />
          <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
          <input type="radio" name="who" id={answers[1]} />
          <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
          <input type="radio" name="who" id={answers[2]} />
          <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
          <input type="radio" name="who" id={answers[3]} />
          <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyOne;
