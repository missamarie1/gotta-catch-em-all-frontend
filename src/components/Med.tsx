import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import "./Med.css";
import MedOne from "./MedOne";
import MedThree from "./MedThree";
import MedTwo from "./MedTwo";
import Summary from "./Summary";

const Med = () => {
  const { questionsAnswered, currentPokemon, getAndSetPokemon } =
    useContext(GameContext);
  const { medPokemonToBeCaught } = useContext(AuthContext);

  useEffect(() => {
    if (!currentPokemon) {
      if (medPokemonToBeCaught.length > 0) {
        let randomMed =
          medPokemonToBeCaught[
            Math.floor(Math.random() * medPokemonToBeCaught.length)
          ];
        getAndSetPokemon("med", randomMed);
      } else {
        alert(
          "You have already caught all the Pokémon in this difficulty please select another difficulty"
        );
        window.location.assign("/difficulty");
      }
    }
  }, [currentPokemon]);

  return (
    <div className="Med">
      {!questionsAnswered ? (
        <MedOne />
      ) : questionsAnswered === 1 ? (
        <MedTwo />
      ) : questionsAnswered === 2 ? (
        <MedThree />
      ) : (
        <Summary />
      )}
    </div>
  );
};

export default Med;
