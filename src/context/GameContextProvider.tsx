import { ReactNode, useState } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const updateScore = () => {
    setCurrentScore((prev) => {
      return prev + 1;
    });
  };

  return (
    <GameContext.Provider value={{ currentScore, updateScore }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
