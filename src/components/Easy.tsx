import { useContext, useEffect } from "react";
import GameContext from "../context/GameContext";
import { easy } from "../services/PokemonService";
import "./Easy.css";
import EasyOne from "./EasyOne";
import EasyThree from "./EasyThree";
import EasyTwo from "./EasyTwo";

const Easy = () => {
  const { questionsAnswered, setCurrentPokemonID, currentPokemonID } =
    useContext(GameContext);

  useEffect(() => {
    if (!currentPokemonID) {
      let randomEasy = easy[Math.floor(Math.random() * easy.length)];
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
        <p>TODO</p>
      )}
    </div>
  );
};

export default Easy;
