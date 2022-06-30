import { ReactNode, useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon";
import { hardPokemon } from "../services/HardAnswers";
import { medPokemon } from "../services/MedAnswers";
import { getRandomEasy } from "../services/PokemonService";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(3);
  const [challengeLevel, setChallengeLevel] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [caught, setCaught] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const OneThirdsChance = [false, false, true];
  const TwoThirdsChance = [true, true, false];
  const OneFifthsChance = [true, false, false, false, false];
  const TwoFifthsChance = [true, true, false, false, false];
  const OneSeventhsChance = [true, false, false, false, false, false, false];
  const TwoSeventhsChance = [true, true, false, false, false, false, false];
  const updateScore = () => {
    setCurrentScore((prev) => {
      return prev - 1;
    });
  };

  const getAndSetPokemon = (difficulty: string, id: number) => {
    if (difficulty === "easy") {
      getRandomEasy(id).then((res) => {
        setCurrentPokemon(res);
      });
    } else if (difficulty === "med") {
      const foundPokemon = medPokemon.find((pokemon) => pokemon.id === id);
      if (foundPokemon) {
        getRandomEasy(id).then((res) => {
          foundPokemon.sprites = res.sprites;
          setCurrentPokemon(foundPokemon);
        });
      }
    } else if (difficulty === "hard") {
      const foundPokemon = hardPokemon.find((pokemon) => pokemon.id === id);
      if (foundPokemon) {
        getRandomEasy(id).then((res) => {
          foundPokemon.sprites = res.sprites;
          setCurrentPokemon(foundPokemon);
        });
      }
    }
  };

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (questionsAnswered === 3 && challengeLevel === "easy") {
      if (!currentScore) {
        setCaught(true);
      } else if (currentScore === 2 && challengeLevel === "easy") {
        let result = OneThirdsChance[randomNumber];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "easy") {
        let result = TwoThirdsChance[randomNumber];
        setCaught(result);
      }
    } else if (questionsAnswered === 3 && challengeLevel === "med") {
      if (!currentScore) {
        setCaught(true);
      } else if (currentScore === 2 && challengeLevel === "med") {
        let result = OneFifthsChance[randomNumber];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "med") {
        let result = TwoFifthsChance[randomNumber];
        setCaught(result);
      }
    } else if (questionsAnswered === 3 && challengeLevel === "hard") {
      if (!currentScore) {
        setCaught(true);
      } else if (currentScore === 2 && challengeLevel === "hard") {
        let result = OneSeventhsChance[randomNumber];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "hard") {
        let result = TwoSeventhsChance[randomNumber];
        setCaught(result);
      }
    }
  }, [questionsAnswered, challengeLevel]);

  return (
    <GameContext.Provider
      value={{
        currentScore,
        setCurrentScore,
        updateScore,
        challengeLevel,
        setChallengeLevel,
        questionsAnswered,
        setQuestionsAnswered,
        gameInProgress,
        setGameInProgress,
        currentPokemon,
        getAndSetPokemon,
        caught,
        setCaught,
        setCurrentPokemon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
