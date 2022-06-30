import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import "./Easy.css";
import EasyOne from "./EasyOne";
import EasyThree from "./EasyThree";
import EasyTwo from "./EasyTwo";
import Summary from "./Summary";

const Easy = () => {
  const { questionsAnswered, currentPokemon, getAndSetPokemon } =
    useContext(GameContext);
  const { easyPokemonToBeCaught } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!currentPokemon) {
      if (easyPokemonToBeCaught.length > 0) {
        let randomEasy =
          easyPokemonToBeCaught[
            Math.floor(Math.random() * easyPokemonToBeCaught.length)
          ];
        getAndSetPokemon("easy", randomEasy);
      } else {
        setShowAlert(true);
      }
    }
  }, [currentPokemon]);
  const submitHandler = () => {
    setShowAlert(false);
    window.location.assign("/difficulty");
  };

  return (
    <div className="Easy">
      {showAlert && (
        <div className="alert">
          <p>
            You have already caught all the Pokémon in this difficulty please
            select another difficulty
          </p>
          <button onClick={submitHandler}>Close</button>
        </div>
      )}

      {!questionsAnswered ? (
        <EasyOne />
      ) : questionsAnswered === 1 ? (
        <EasyTwo />
      ) : questionsAnswered === 2 ? (
        <EasyThree />
      ) : (
        <Summary />
      )}
    </div>
  );
};

export default Easy;
