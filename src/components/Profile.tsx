import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { CaughtPokemon } from "../models/Account";
import { Pokemon } from "../models/Pokemon";
import { deleteAccount } from "../services/AccountService";
import { getRandomEasy } from "../services/PokemonService";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);
  const [showPokedex, setShowPokedex] = useState(false);
  const [pokedex, setPokedex] = useState<Pokemon>();
  const [showDelete, setShowDelete] = useState(false);
  const [filter, setFilter] = useState("id");
  const [showPokemon, setShowPokemon] = useState<CaughtPokemon[]>();

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

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

  useEffect(() => {
    if (filter === "id") {
      const sortedArray = account?.caught.sort((one, other) => {
        if (one.id > other.id) {
          return 1;
        } else if (one.id < other.id) {
          return -1;
        } else {
          return 0;
        }
      });
      setShowPokemon([...sortedArray!]);
      console.log(sortedArray);
    } else if (filter === "abc") {
      const sortedArray = account?.caught.sort((one, other) => {
        if (one.name > other.name) {
          return 1;
        } else if (one.name < other.name) {
          return -1;
        } else {
          return 0;
        }
      });
      setShowPokemon([...sortedArray!]);
      console.log(sortedArray);
    }
  }, [filter]);

  return (
    <div className="Profile">
      <h2>{account?.userName}</h2>
      {filter === "id" ? (
        <button
          onClick={() => {
            setFilter("abc");
          }}
        >
          Sort by Name
        </button>
      ) : (
        <button
          onClick={() => {
            setFilter("id");
          }}
        >
          Sort by Pokédex Number
        </button>
      )}
      <img src={account?.avatar} id="profile-avatar" />
      <p>Total Score: {account?.totalScore}</p>
      <p>Pokémon Caught: {account?.caught.length}</p>
      <h3>Pokémon Collection:</h3>
      <ul>
        {showPokemon?.map((pokemon, index) => (
          <li
            onClick={() => renderPokedex(pokemon.id)}
            key={`${pokemon.id}${Math.random()}${index}`}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{toTitleCase(pokemon.name)}</p>
          </li>
        ))}
      </ul>
      {showPokedex && (
        <div className="pokedex">
          <h2>Pokédex:</h2>
          <img src={pokedex?.sprites?.front_default} alt={pokedex?.name} />
          <p>Name: {pokedex?.name}</p>
          <p>Type: {pokedex?.types && pokedex?.types[0].type.name}</p>
          <p>Number: {pokedex?.id}</p>
          <button onClick={() => setShowPokedex(false)}>Close</button>
        </div>
      )}
      <button onClick={() => setShowDelete(true)}>Delete Account</button>
      {showDelete && (
        <div className="delete">
          <p>
            Are you sure you would like to delete your account? All of your
            Pokémon will be released back into the wild!
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
