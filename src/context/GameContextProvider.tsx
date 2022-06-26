import { ReactNode, useState } from "react";
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
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

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
        setCurrentPokemon(foundPokemon);
      }
    } else if (difficulty === "hard") {
      const foundPokemon = hardPokemon.find((pokemon) => pokemon.id === id);
      if (foundPokemon) {
        setCurrentPokemon(foundPokemon);
      }
    }
  };

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
