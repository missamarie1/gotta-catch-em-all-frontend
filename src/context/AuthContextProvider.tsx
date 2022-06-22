import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { Account } from "../models/Account";
import { checkForAccount } from "../services/AccountService";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        checkForAccount(newUser.uid).then((res) => {
          console.log(res);
          if (res.length !== 0) {
            setAccount(res[0]);
          }
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
