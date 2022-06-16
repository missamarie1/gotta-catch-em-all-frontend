import { rejects } from "assert";
import axios from "axios";
import { PokemonEasy } from "../models/Pokemon";

const pokemonBaseUrl = process.env.REACT_APP_POKEMON_BASE_URL || "";

export const easy = [
  1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48,
  50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 83, 84, 86, 88, 90,
  92, 95, 96, 98, 100, 102, 104, 108, 109, 111, 113, 114, 115, 116, 118, 120,
  122, 123, 124, 125, 126, 127, 128, 129, 132, 137, 138, 140, 147,
];

export const getRandomEasy = (): Promise<PokemonEasy> => {
  let randomEasy = easy[Math.floor(Math.random() * easy.length)];
  return axios
    .get(`${pokemonBaseUrl}/pokemon/${randomEasy}`)
    .then((res) => res.data);
};
