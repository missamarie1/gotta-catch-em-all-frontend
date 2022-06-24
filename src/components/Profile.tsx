import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { PokemonEasy } from "../models/Pokemon";
import { deleteAccount } from "../services/AccountService";
import { getRandomEasy } from "../services/PokemonService";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);

  const [showDetails, setShowDetails] = useState(false);
  const [thisPokemon, setThisPokemon] = useState<PokemonEasy>();

  const renderDetails = (id: number): void => {
    setShowDetails(true);
    getRandomEasy(id).then((res) => {
      setThisPokemon(res);
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
      {showDetails && (
        <div className="pokemon-background">
          <div className="pokemon-card">
            {/* <img
              src={thisPokemon.sprites.front_default}
              alt={thisPokemon.name}
            /> */}
            <p>{thisPokemon?.name}</p>
            <p>{thisPokemon?.types[0].type.name}</p>
            <p>{thisPokemon?.id}</p>
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
      <h2>{account?.userName}</h2>
      <img src={account?.avatar} id="profile-avatar" />
      <p>Pokemon Collection:</p>
      <ul>
        {account?.caught.map((pokemon, index) => (
          <li
            onClick={() => renderDetails(pokemon.id)}
            key={pokemon.id + index}
          >
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
