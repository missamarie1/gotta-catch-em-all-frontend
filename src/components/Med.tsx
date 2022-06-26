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
      let randomMed =
        medPokemonToBeCaught[
          Math.floor(Math.random() * medPokemonToBeCaught.length)
        ];

      getAndSetPokemon("med", randomMed);
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
