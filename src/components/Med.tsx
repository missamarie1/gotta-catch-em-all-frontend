import { useContext, useEffect, useState } from "react";
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
  const { medPokemonToBeCaught, account } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!currentPokemon) {
      if (account) {
        if (medPokemonToBeCaught.length > 0) {
          let randomMed =
            medPokemonToBeCaught[
              Math.floor(Math.random() * medPokemonToBeCaught.length)
            ];
          getAndSetPokemon("med", randomMed);
        } else {
          setShowAlert(true);
        }
      }
    }
  }, [currentPokemon, account]);

  const submitHandler = () => {
    setShowAlert(false);
    window.location.assign("/difficulty");
  };

  return (
    <div className="Med">
      {showAlert ? (
        <div className="alert">
          <p>
            You have already caught all the Pokémon in this difficulty please
            select another difficulty
          </p>
          <button onClick={submitHandler}>Close</button>
        </div>
      ) : !questionsAnswered ? (
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
