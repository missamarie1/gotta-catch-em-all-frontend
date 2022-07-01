import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { CaughtPokemon } from "../models/Account";
import { capturedPokemon, checkForAccount } from "../services/AccountService";
import "./Summary.css";
import player from "../assets/player.webp";

const Summary = () => {
  const { currentPokemon, caught, challengeLevel } = useContext(GameContext);
  const { account, user, setAccount, isCaught, setAvailiblePokemonPool } =
    useContext(AuthContext);
  const refreshPage = () => {
    window.location.assign("/difficulty");
  };

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    if (caught) {
      const newPokemon: CaughtPokemon = {
        id: currentPokemon?.id!,
        name: currentPokemon?.name!,
        image: currentPokemon?.sprites?.front_default!,
      };
      let totalScore = 0;
      if (challengeLevel === "easy") {
        totalScore++;
      } else if (challengeLevel === "med") {
        totalScore += 2;
      } else if (challengeLevel === "hard") {
        totalScore += 3;
      }

      const body: any = {
        newPokemon,
        totalScore,
      };
      if (!isCaught(currentPokemon?.id!)) {
        capturedPokemon(account?._id!, body).then(() => {
          checkForAccount(user?.uid!).then((res) => {
            setAccount(res[0]);
            setAvailiblePokemonPool(res[0]);
          });
        });
      }
    }
  }, [caught]);

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
        <h2>Gotcha! {toTitleCase(currentPokemon?.name!)} was caught!</h2>
      ) : (
        <h2>Wild {toTitleCase(currentPokemon?.name!)} has Fled!</h2>
      )}
      <Link to="/difficulty">
        <button onClick={refreshPage}>Play Again</button>
      </Link>
      <button>
        <Link to="/play">Return Home</Link>
      </button>
    </div>
  );
};

export default Summary;
