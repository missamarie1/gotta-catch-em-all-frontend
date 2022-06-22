import { createContext } from "react";

export interface GameContextModel {
  currentScore: number;
  updateScore: () => void;
  currentPokemonID: number;
  setCurrentPokemonID: (n: number) => void;
  challengeLevel: string;
  setChallengeLevel: (l: string) => void;
  questionsAnswered: number;
  setQuestionsAnswered: (n: number) => void;
}

const defaultValues: GameContextModel = {
  currentScore: 0,
  updateScore: () => {},
  currentPokemonID: 0,
  setCurrentPokemonID: () => {},
  challengeLevel: "",
  setChallengeLevel: () => {},
  questionsAnswered: 0,
  setQuestionsAnswered: () => {},
};

const GameContext = createContext(defaultValues);

export default GameContext;
