import { createContext } from "react";

export interface GameContextModel {
  currentScore: number;
  updateScore: () => void;
  currentPokemonID: number;
  setCurrentPokemonID: (n: number) => void;
  //   caught: PokemonEasy[];
  //   addFavorite: (gif: Gif) => void;
  //   removeFavorite: (id: string) => void;
  //   isCaught: (id: string) => boolean;
}

const defaultValues: GameContextModel = {
  currentScore: 0,
  updateScore: () => {},
  currentPokemonID: 0,
  setCurrentPokemonID: () => {},
  //   caught: [],
  //   addFavorite: () => {},
  //   removeFavorite: () => {},
  //   isCaught: () => false,
};

const GameContext = createContext(defaultValues);

export default GameContext;
