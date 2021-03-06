import axios from "axios";
import { Account } from "../models/Account";

const accountBaseUrl = process.env.REACT_APP_API_URL || "";

export const checkForAccount = (uid: string): Promise<Account[]> => {
  return axios.get(`${accountBaseUrl}/account/${uid}`).then((res) => res.data);
};

export const getAllAccounts = (): Promise<Account[]> => {
  return axios.get(`${accountBaseUrl}/account`).then((res) => res.data);
};

export const capturedPokemon = (
  id: string,
  updatedInfo: any
): Promise<void> => {
  return axios
    .put(`${accountBaseUrl}/account/pokemon/${id}`, updatedInfo)
    .then((res) => res.data);
};

export const makeNewAccount = (newAccount: Account): Promise<Account> => {
  return axios
    .post(`${accountBaseUrl}/account`, newAccount)
    .then((res) => res.data);
};

export const deleteAccount = (id: string): Promise<void> => {
  return axios.delete(`${accountBaseUrl}/account/${id}`);
};

export const updateAccount = (acc: Account, id: string): Promise<Account>=>{
  return axios.put(`${accountBaseUrl}/account/update/${id}`, acc).then((res)=>res.data)
}
