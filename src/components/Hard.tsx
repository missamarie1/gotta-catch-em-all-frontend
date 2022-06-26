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
      let randomHard =
        hardPokemonToBeCaught[
          Math.floor(Math.random() * hardPokemonToBeCaught.length)
        ];

      getAndSetPokemon("hard", randomHard);
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
