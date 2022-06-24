import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import "./Easy.css";
import EasyOne from "./EasyOne";
import EasyThree from "./EasyThree";
import EasyTwo from "./EasyTwo";
import Summary from "./Summary";

const Easy = () => {
  const { questionsAnswered, setCurrentPokemonID, currentPokemonID } =
    useContext(GameContext);
  const { easyPokemonToBeCaught } = useContext(AuthContext);

  useEffect(() => {
    if (!currentPokemonID) {
      let randomEasy =
        easyPokemonToBeCaught[
          Math.floor(Math.random() * easyPokemonToBeCaught.length)
        ];

      setCurrentPokemonID(randomEasy);
    }
  }, [currentPokemonID]);
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
