import { useContext, useEffect, useState } from "react";
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
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!currentPokemon) {
      if (hardPokemonToBeCaught.length > 0) {
        let randomHard =
          hardPokemonToBeCaught[
            Math.floor(Math.random() * hardPokemonToBeCaught.length)
          ];
        getAndSetPokemon("hard", randomHard);
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
    <div className="Hard">
      {showAlert && (
        <div className="alert">
          <p>
            You have already caught all the Pokémon in this difficulty please
            select another difficulty
          </p>
          <button onClick={submitHandler}>okay</button>
        </div>
      )}

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
