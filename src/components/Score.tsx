import { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import {
  getRandomItem,
  oneThirds,
  twoThirds,
} from "../services/PossibleAnswers";
import "./Score.css";

const Score = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [caught, setCaught] = useState(true);
  const { currentPokemonID, currentScore } = useContext(GameContext);

  function getRandomItem(array: boolean[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
  }
  const result1 = getRandomItem(oneThirds);
  const result2 = getRandomItem(twoThirds);

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
        if (currentScore === 1) {
          setCaught(result1);
          // console.log(result2);
        } else if (currentScore === 2) {
          setCaught(result2);
          // console.log(result1);
        } else if (currentScore === 3) {
          setCaught(false);
        }
      });
    }
  }, [currentPokemonID, caught]);

  return (
    <div className="Score">
      <p>{}</p>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      {caught ? (
        <h2>Gotcha! {pokemon?.name} was caught!</h2>
      ) : (
        <h2>Wild {pokemon?.name} Fled</h2>
      )}
    </div>
  );
};

export default Score;
