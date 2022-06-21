import { ReactNode, useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(3);
  const [currentPokemonID, setCurrentPokemonID] = useState(0);
  const [challengeLevel, setChallengeLevel] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const updateScore = () => {
    setCurrentScore((prev) => {
      return prev - 1;
    });
  };

  return (
    <GameContext.Provider
      value={{
        currentScore,
        updateScore,
        currentPokemonID,
        setCurrentPokemonID,
        challengeLevel,
        setChallengeLevel,
        questionsAnswered,
        setQuestionsAnswered,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
