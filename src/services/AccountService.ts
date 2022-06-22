import axios from "axios";
import { Account, Pokemon } from "../models/Account";

const accountBaseUrl = process.env.REACT_APP_API_URL || "";

export const checkForAccount = (uid: string): Promise<Account[]> => {
  return axios.get(`${accountBaseUrl}/account/${uid}`).then((res) => res.data);
};

export const makeNewAccount = (newAccount: Account): Promise<Account> => {
  return axios
    .post(`${accountBaseUrl}/account`, newAccount)
    .then((res) => res.data);
};

export const capturedPokemon = (
  id: string,
  newPokemon: Pokemon
): Promise<void> => {
  return axios
    .put(`${accountBaseUrl}/account/${id}`, newPokemon)
    .then((res) => res.data);
};

export const getAllAccounts = (): Promise<Account[]> => {
  return axios.get(`${accountBaseUrl}/account`).then((res) => res.data);
};
