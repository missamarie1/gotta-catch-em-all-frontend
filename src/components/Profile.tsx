import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);

  return (
    <div className="Profile">
      <h2>{account?.userName}</h2>
      <img src={account?.avatar} />
      <p>Pokemon Collection:</p>
      <ul>
        {account?.caught.map((pokemon, index) => (
          <li key={pokemon.id + index}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Profile;
