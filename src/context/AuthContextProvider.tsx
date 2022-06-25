import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { Account } from "../models/Account";
import { checkForAccount } from "../services/AccountService";
import { easy, med, hard } from "../services/PokemonService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [easyPokemonToBeCaught, setEasyPokemonToBeCaught] = useState<number[]>(
    []
  );
  const [medPokemonToBeCaught, setMedPokemonToBeCaught] = useState<number[]>(
    []
  );
  const [hardPokemonToBeCaught, setHardPokemonToBeCaught] = useState<number[]>(
    []
  );
  const isCaught = (id: number) => {
    if (account) {
      return account.caught.some((item) => {
        return item.id === id;
      });
    } else {
      return false;
    }
  };
  const setAvailiblePokemonPool = (acc: Account) => {
    const caughtPokemonIDs: number[] = [];
    acc.caught.forEach((pokemon) => {
      caughtPokemonIDs.push(pokemon.id);
    });
    const newArray: number[] = [];
    easy.forEach((pokemon) => {
      if (!caughtPokemonIDs.includes(pokemon)) {
        newArray.push(pokemon);
      }
    });
    setEasyPokemonToBeCaught(newArray);
  };

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        checkForAccount(newUser.uid).then((res) => {
          if (res.length !== 0) {
            setAccount(res[0]);
            setAvailiblePokemonPool(res[0]);
          }
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        account,
        setAccount,
        isCaught,
        easyPokemonToBeCaught,
        medPokemonToBeCaught,
        hardPokemonToBeCaught,
        setAvailiblePokemonPool,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
