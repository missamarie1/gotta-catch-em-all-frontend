import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { CaughtPokemon } from "../models/Account";
import { capturedPokemon, checkForAccount } from "../services/AccountService";
import { oneThirds, twoThirds } from "../services/Answers";
import "./Summary.css";
import player from "../assets/player.webp";

const Summary = () => {
  const [caught, setCaught] = useState(true);
  const result1 = getRandomItem(oneThirds);
  const result2 = getRandomItem(twoThirds);
  const { currentPokemon, currentScore, setGameInProgress, gameInProgress } =
    useContext(GameContext);
  const { account, setAccount, user, setAvailiblePokemonPool, isCaught } =
    useContext(AuthContext);

  function getRandomItem(array: boolean[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
  }

  useEffect(() => {
    if (currentPokemon) {
      if (currentScore === 1) {
        setCaught(result2);
      } else if (currentScore === 2) {
        setCaught(result1);
      } else if (currentScore === 3) {
        setCaught(false);
      }
    }
  }, [currentPokemon, caught]);

  useEffect(() => {
    if (caught && currentPokemon && account && gameInProgress) {
      setGameInProgress(false);
      setAvailiblePokemonPool(account);
      const newPokemon: CaughtPokemon = {
        name: currentPokemon?.name,
        id: currentPokemon?.id,
        image: currentPokemon?.sprites?.front_default!,
      };
      if (!isCaught(currentPokemon.id)) {
        capturedPokemon(account?._id!, newPokemon).then(() => {
          checkForAccount(user?.uid!).then((res) => {
            console.log(res);
            if (res.length !== 0) {
              console.log(res[0]);
              setAccount(res[0]);
            }
          });
        });
      }
    }
  }, [caught, currentPokemon]);

  return (
    <div className="Summary">
      <div className="image-container">
        <img src={player} alt="player" id="player" />
        <img
          src={currentPokemon?.sprites?.front_default}
          alt={currentPokemon?.name}
          id="pokemon"
        />
      </div>
      {caught ? (
        <h2>Gotcha! {currentPokemon?.name} was caught!</h2>
      ) : (
        <h2>Wild {currentPokemon?.name} has Fled!</h2>
      )}
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
};

export default Summary;
