import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Account } from "../models/Account";
import { makeNewAccount } from "../services/AccountService";
import "./Signup.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const { user } = useContext(AuthContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newAccount: Account = {
      uid: user!.uid,
      userName,
      caught: [],
    };
    makeNewAccount(newAccount).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="Signup">
      <form onSubmit={submitHandler}>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
