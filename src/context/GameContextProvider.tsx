import { ReactNode, useEffect, useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(3);
  const [currentPokemonID, setCurrentPokemonID] = useState(0);
  const [challengeLevel, setChallengeLevel] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const updateScore = () => {
    setCurrentScore((prev) => {
      return prev - 1;
    });
  };

  useEffect(() => {
    console.log(currentPokemonID);
  }, [currentPokemonID]);
  return (
    <GameContext.Provider
      value={{
        currentScore,
        setCurrentScore,
        updateScore,
        currentPokemonID,
        setCurrentPokemonID,
        challengeLevel,
        setChallengeLevel,
        questionsAnswered,
        setQuestionsAnswered,
        gameInProgress,
        setGameInProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
