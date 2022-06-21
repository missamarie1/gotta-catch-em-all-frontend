import axios from "axios";
import { Account } from "../models/Account";

const accountBaseUrl = process.env.REACT_APP_API_URL || "";

export const checkForAccount = (uid: string): Promise<Account[]> => {
  return axios.get(`${accountBaseUrl}/account/${uid}`).then((res) => res.data);
};

export const makeNewAccount = (newAccount: Account): Promise<Account> => {
  return axios
    .post(`${accountBaseUrl}/account`, newAccount)
    .then((res) => res.data);
};
