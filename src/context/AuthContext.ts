import { User } from "firebase/auth";
import { createContext } from "react";
import { Account } from "../models/Account";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  account: Account | null;
  setAccount: (a: Account) => void;
  isCaught: (id: number) => boolean;
  easyPokemonToBeCaught: number[];
  setAvailiblePokemonPool: (acc: Account) => void;
}

const defaultValue: AuthContextModel = {
  user: null,
  account: null,
  setAccount: () => {},
  isCaught: () => false,
  easyPokemonToBeCaught: [],
  setAvailiblePokemonPool: () => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;
