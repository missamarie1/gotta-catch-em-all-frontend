import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Account } from "../models/Account";
import {
  getAllAccounts,
  makeNewAccount,
  updateAccount,
} from "../services/AccountService";
import Avatar from "./Avatar";
import "./Signup.css";

interface Props {
  usernameProp: string;
  avatarProp: string;
  editMode: boolean;
}

const Signup = ({ usernameProp, avatarProp, editMode }: Props) => {
  const [userName, setUserName] = useState(usernameProp);
  const [avatar, setAvatar] = useState(avatarProp);
  const { user, setAccount, account } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    if (!editMode) {
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
          setMessage("That username is taken please select another username");
          setShowAlert(true);
        } else {
          if (avatar && userName) {
            makeNewAccount(newAccount).then((res) => {
              setAccount(res);
            });
          } else if (!avatar && userName) {
            setMessage("Please select an avatar");
            setShowAlert(true);
          } else if (avatar && !userName) {
            setMessage("Please enter a username");
            setShowAlert(true);
          } else {
            setMessage("Please enter a username and select an avatar");
            setShowAlert(true);
          }
        }
      });
    } else {
      const updatedAccount: Account = {
        ...account!,
      };
      updatedAccount.avatar = avatar;
      updatedAccount.userName = userName;
      getAllAccounts().then((res) => {
        const foundDuplicate = res.find((acc) => {
          return (
            acc.userName.toLowerCase() === userName.toLowerCase() &&
            acc.userName.toLowerCase() !== account?.userName.toLowerCase()
          );
        });
        if (foundDuplicate) {
          setMessage("That username is taken please select another username");
          setShowAlert(true);
        } else {
          if (avatar && userName) {
            updateAccount(updatedAccount, account?._id!).then((res) => {
              setAccount(res);
              window.location.reload();
            });
          } else if (!avatar && userName) {
            setMessage("Please select an avatar");
            setShowAlert(true);
          } else if (avatar && !userName) {
            setMessage("Please enter a username");
            setShowAlert(true);
          } else {
            setMessage("Please enter a username and select an avatar");
            setShowAlert(true);
          }
        }
      });
    }
  };

  return (
    <div className="Signup">
      {showAlert && (
        <div className="alert">
          <p>{message}</p>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}

      <form className="signup-form" onSubmit={submitHandler}>
        <label htmlFor="username">
          {!editMode ? "Create" : "Update"} Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p>Select Avatar:</p>
        <Avatar setAvatar={setAvatar} avatar={avatar} />
        <button className="signup button">
          {!editMode ? "Signup" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
