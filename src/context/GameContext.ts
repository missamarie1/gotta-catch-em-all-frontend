import { createContext } from "react";
import { Pokemon } from "../models/Pokemon";

export interface GameContextModel {
  currentScore: number;
  setCurrentScore: (n: number) => void;
  updateScore: () => void;
  challengeLevel: string;
  setChallengeLevel: (l: string) => void;
  questionsAnswered: number;
  setQuestionsAnswered: (n: number) => void;
  gameInProgress: boolean;
  setGameInProgress: (b: boolean) => void;
  currentPokemon: Pokemon | null;
  getAndSetPokemon: (s: string, n: number) => void;
}

const defaultValues: GameContextModel = {
  currentScore: 0,
  setCurrentScore: () => {},
  updateScore: () => {},
  challengeLevel: "",
  setChallengeLevel: () => {},
  questionsAnswered: 0,
  setQuestionsAnswered: () => {},
  gameInProgress: false,
  setGameInProgress: () => {},
  currentPokemon: null,
  getAndSetPokemon: () => {},
};

const GameContext = createContext(defaultValues);

export default GameContext;
