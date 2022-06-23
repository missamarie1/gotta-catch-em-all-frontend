import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import GameContext from "../context/GameContext";
import { Pokemon } from "../models/Account";
import { PokemonEasy } from "../models/Pokemon";
import { capturedPokemon, checkForAccount } from "../services/AccountService";
import { getRandomEasy } from "../services/PokemonService";
import { oneThirds, twoThirds } from "../services/PossibleAnswers";
import "./Summary.css";
import player from "../assets/player.webp";

const Summary = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const { currentPokemonID, currentScore, setGameInProgress } = useContext(GameContext);
  const { account, setAccount, user, setAvailiblePokemonPool, isCaught } =
    useContext(AuthContext);
  const [caught, setCaught] = useState(true);
  function getRandomItem(array: boolean[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
  }
  const result1 = getRandomItem(oneThirds);
  const result2 = getRandomItem(twoThirds);

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
        if (currentScore === 1) {
          setCaught(result2);
          // console.log(result2);
        } else if (currentScore === 2) {
          setCaught(result1);
          // console.log(result1);
        } else if (currentScore === 3) {
          setCaught(false);
        }
      });
    }
  }, [currentPokemonID, caught]);

  useEffect(() => {
    if (caught && pokemon && account) {
      setGameInProgress(false)
      setAvailiblePokemonPool(account);
      const newPokemon: Pokemon = {
        name: pokemon?.name,
        id: pokemon?.id,
        image: pokemon?.sprites.front_default,
      };

      if (!isCaught(currentPokemonID)) {
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
  }, [caught, pokemon]);

  return (
    <div className="Summary">
      <p>{}</p>
      <div className="image-container">
        <img src={player} alt="player" />
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      {caught ? (
        <h2>Gotcha! {pokemon?.name} was caught!</h2>
      ) : (
        <h2>Wild {pokemon?.name} Fled</h2>
      )}
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Summary;
