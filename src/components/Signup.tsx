import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Account } from "../models/Account";
import { getAllAccounts, makeNewAccount } from "../services/AccountService";
import Avatar from "./Avatar";
import "./Signup.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const { user, setAccount } = useContext(AuthContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newAccount: Account = {
      uid: user!.uid,
      avatar,
      userName,
      caught: [],
      totalScore: 0,
    };
    getAllAccounts().then((res) => {
      const foundDuplicate = res.find((account) => {
        return account.userName.toLowerCase() === userName.toLowerCase();
      });
      if (foundDuplicate) {
        alert("Username taken, please select another username");
      } else {
        if (avatar && userName) {
          makeNewAccount(newAccount).then((res) => {
            setAccount(res);
          });
        } else if (!avatar && userName) {
          alert("Please select an avatar");
        } else if (avatar && !userName) {
          alert("Please enter a username");
        } else {
          alert("Please enter a username and select an avatar");
        }
      }
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
