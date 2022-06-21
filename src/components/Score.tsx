import { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import "./Score.css";

const Score = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const { currentPokemonID, currentScore } = useContext(GameContext);

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
      });
    }
  }, [currentPokemonID]);

  return (
    <div className="Score">
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
};

export default Score;
