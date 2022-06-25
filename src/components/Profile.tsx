import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { PokemonEasy } from "../models/PokemonEasy";
import { deleteAccount } from "../services/AccountService";
import { getRandomEasy } from "../services/PokemonService";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);
  const [showPokedex, setShowPokedex] = useState(false);
  const [pokedex, setPokedex] = useState<PokemonEasy>();
  const [showDelete, setShowDelete] = useState(false);

  const renderPokedex = (id: number): void => {
    setShowPokedex(true);
    getRandomEasy(id).then((res) => {
      setPokedex(res);
    });
  };

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
      {showPokedex && (
        <div className="pokedex">
          <h2>Pokedex:</h2>
          <img src={pokedex?.sprites.front_default} alt={pokedex?.name} />
          <p>Name: {pokedex?.name}</p>
          <p>Type: {pokedex?.types[0].type.name}</p>
          <p>Number: {pokedex?.id}</p>
          <button onClick={() => setShowPokedex(false)}>Close</button>
        </div>
      )}
      <h2>{account?.userName}</h2>
      <img src={account?.avatar} id="profile-avatar" />
      <p>Pokemon Collection:</p>
      <ul>
        {account?.caught.map((pokemon, index) => (
          <li
            onClick={() => renderPokedex(pokemon.id)}
            key={pokemon.id + index}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{toTitleCase(pokemon.name)}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowDelete(true)}>Delete Account</button>
      {showDelete && (
        <div className="delete">
          <p>
            Are you sure you would like to delete your account? All of your
            Pokemon will be released back into the wild!
          </p>
          <button
            onClick={() => {
              deleteHandler(account?._id!);
            }}
          >
            Yes
          </button>
          <button onClick={() => setShowDelete(false)}>No</button>
        </div>
      )}
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Profile;
