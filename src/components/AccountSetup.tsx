import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./AccountSetup.css";
import Signup from "./Signup";

const AccountSetup = () => {
  const { user, account } = useContext(AuthContext);
  console.log(account);

  return (
    <div className="AccountSetup">
      {!user ? (
        <button onClick={signInWithGoogle}>Login</button>
      ) : (
        <div>
          <Link to="/home">
            <button>Enter</button>
          </Link>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}

      {user && !account && <Signup />}
    </div>
  );
};

export default AccountSetup;
