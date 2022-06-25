import axios from "axios";
import { PokemonEasy } from "../models/PokemonEasy";
import { PokemonMed } from "../models/PokemonMed";

const pokemonBaseUrl = process.env.REACT_APP_POKEMON_BASE_URL || "";

export const easy = [
  1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48,
  50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 83, 84, 86, 88, 90,
  92, 95, 96, 98, 100, 102, 104, 108, 109, 111, 113, 114, 115, 116, 118, 120,
  122, 123, 124, 125, 126, 127, 128, 129, 132, 137, 138, 140, 147,
];

export const med = [
  2, 5, 8, 11, 14, 17, 20, 22, 24, 26, 28, 30, 33, 36, 38, 40, 42, 44, 47, 49,
  51, 53, 55, 57, 59, 61, 64, 67, 70, 73, 75, 78, 80, 82, 85, 87, 89, 91, 93,
  97, 99, 101, 103, 105, 110, 112, 117, 119, 121, 130, 139, 141, 148,
];

export const hard = [
  3, 6, 9, 12, 15, 18, 31, 34, 45, 62, 65, 68, 71, 76, 94, 106, 107, 131, 133,
  134, 135, 136, 142, 143, 144, 145, 146, 149, 150, 151,
];

export const getRandomEasy = (id: number): Promise<PokemonEasy> => {
  return axios.get(`${pokemonBaseUrl}/pokemon/${id}`).then((res) => res.data);
};

export const getRandomMed = (id: number): Promise<PokemonMed> => {
  return axios.get(`${pokemonBaseUrl}/pokemon/${id}`).then((res) => res.data);
};

export const getRandomHard = (id: number): Promise<PokemonMed> => {
  return axios.get(`${pokemonBaseUrl}/pokemon/${id}`).then((res) => res.data);
};
