import { ReactNode, useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [currentPokemonID, setCurrentPokemonID] = useState(0);
  const [challengeLevel, setChallengeLevel] = useState("Hi");
  const [questionsAnswered, setQuestionedAnswered] = useState(0);
  const updateScore = () => {
    setCurrentScore((prev) => {
      console.log(prev + 1);

      return prev + 1;
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
        setQuestionedAnswered,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
