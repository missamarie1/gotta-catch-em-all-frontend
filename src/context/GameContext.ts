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
  caught: boolean;
  setCaught: (b: boolean) => void;
  setCurrentPokemon: (pokemon: Pokemon | null) => void;
  updateEasyScore: ()=>void;
  updateMedScore: ()=>void;
  updateHardScore: ()=>void;
  totalScore: number
  // currentPokemonAPI: Pokemon | null;
  // setCurrentPokemonAPI: (id: number) => void;
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
  caught: false,
  setCaught: () => {},
  setCurrentPokemon: () => {},
  updateEasyScore: ()=>{},
  updateMedScore: ()=>{},
  updateHardScore: ()=>{},
  totalScore: 0
  // currentPokemonAPI: null,
  // setCurrentPokemonAPI: () => {},
};

const GameContext = createContext(defaultValues);

export default GameContext;
