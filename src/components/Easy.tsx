import { useContext, useEffect } from "react";
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

  useEffect(() => {
    if (!currentPokemon) {
      let randomEasy =
        easyPokemonToBeCaught[
          Math.floor(Math.random() * easyPokemonToBeCaught.length)
        ];
      getAndSetPokemon("easy", randomEasy);
    }
  }, [currentPokemon]);

  return (
    <div className="Easy">
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
