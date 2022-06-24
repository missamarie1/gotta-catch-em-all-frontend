import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Account } from "../models/Account";
import { makeNewAccount } from "../services/AccountService";
import Avatar from "./Avatar";
import "./Signup.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const { user, account, setAccount } = useContext(AuthContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newAccount: Account = {
      uid: user!.uid,
      avatar,
      userName,
      caught: [],
    };
    makeNewAccount(newAccount).then((res) => {
      setAccount(res);
    });
  };

  return (
    <div className="Signup">
      <form className="signup-form" onSubmit={submitHandler}>
        <label htmlFor="username">Create Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="username-input"
        />
        <p>Select Avatar:</p>
        <Avatar setAvatar={setAvatar} avatar={avatar} />
        <button className="signup button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
