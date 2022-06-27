import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { CaughtPokemon } from "../models/Account";
import { capturedPokemon, checkForAccount } from "../services/AccountService";
import "./Summary.css";
import player from "../assets/player.webp";

const Summary = () => {
  const {
    currentPokemon,
    caught,
    challengeLevel,
    updateEasyScore,
    updateHardScore,
    updateMedScore,
  } = useContext(GameContext);
  const { account, user, setAccount, isCaught, setAvailiblePokemonPool } =
    useContext(AuthContext);

  useEffect(() => {
    if (caught) {
      const newPokemon: CaughtPokemon = {
        id: currentPokemon?.id!,
        name: currentPokemon?.name!,
        image: currentPokemon?.sprites?.front_default!,
      };
      if (!isCaught(currentPokemon?.id!)) {
        capturedPokemon(account?._id!, newPokemon).then((res) => {
          checkForAccount(user?.uid!).then((res) => {
            setAccount(res[0]);
            setAvailiblePokemonPool(res[0]);
          });
        });
      }
    }
  }, [caught]);

  useEffect(() => {
    if (caught && challengeLevel === "easy") {
      updateEasyScore();
    }
    if (caught && challengeLevel === "med") {
      updateMedScore();
    }
    if (caught && challengeLevel === "hard") {
      updateHardScore();
    }
  }, []);
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
