import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import "./Hard.css";
import HardOne from "./HardOne";
import HardThree from "./HardThree";
import HardTwo from "./HardTwo";
import Summary from "./Summary";

const Hard = () => {
  const { questionsAnswered, currentPokemon, getAndSetPokemon } =
    useContext(GameContext);
  const { hardPokemonToBeCaught } = useContext(AuthContext);

  useEffect(() => {
    if (!currentPokemon) {
      if (hardPokemonToBeCaught.length > 0) {
        let randomHard =
          hardPokemonToBeCaught[
            Math.floor(Math.random() * hardPokemonToBeCaught.length)
          ];
        getAndSetPokemon("hard", randomHard);
      } else {
        alert("You have already caught all the Pokémon in this region");
      }
    }
  }, [currentPokemon]);

  return (
    <div className="Hard">
      {!questionsAnswered ? (
        <HardOne />
      ) : questionsAnswered === 1 ? (
        <HardTwo />
      ) : questionsAnswered === 2 ? (
        <HardThree />
      ) : (
        <Summary />
      )}
    </div>
  );
};

export default Hard;
