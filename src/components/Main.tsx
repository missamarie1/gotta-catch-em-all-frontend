import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import { Account } from "../models/Account";
import { checkForAccount } from "../services/AccountService";
import "./Main.css";
import Signup from "./Signup";

const Main = () => {
  const { user } = useContext(AuthContext);
  const [account, setAccount] = useState<Account>();
  console.log(user);

  useEffect(() => {
    if (user) {
      checkForAccount(user.uid).then((res) => {
        if (res.length === 0) {
          //make account
        } else {
          setAccount(res[0]);
        }
      });
    }
  }, [user]);
  return (
    <div className="Main">
      <button onClick={signInWithGoogle}>Login</button>
      {user && !account && <Signup />}
    </div>
  );
};

export default Main;
