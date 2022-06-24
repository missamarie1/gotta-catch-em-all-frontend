import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { deleteAccount } from "../services/AccountService";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);
  const deleteHandler = (id: string): void => {
    deleteAccount(id);
    window.location.assign("/");
  };

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div className="Profile">
      <h2>{account?.userName}</h2>
      <img src={account?.avatar} id="profile-avatar" />
      <p>Pokemon Collection:</p>
      <ul>
        {account?.caught.map((pokemon, index) => (
          <li key={pokemon.id + index}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{toTitleCase(pokemon.name)}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          deleteHandler(account?._id!);
        }}
      >
        Delete Account
      </button>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Profile;
