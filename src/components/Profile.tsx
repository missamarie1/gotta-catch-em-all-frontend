import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { CaughtPokemon } from "../models/Account";
import { Pokemon } from "../models/Pokemon";
import { deleteAccount } from "../services/AccountService";
import { getRandomEasy } from "../services/PokemonService";
import "./Profile.css";
import Signup from "./Signup";

const Profile = () => {
  const { account } = useContext(AuthContext);
  const [setupProfile, showSetupProfile] = useState(false);
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
    deleteAccount(id).then(() => window.location.assign("/"));
  };

  useEffect(() => {
    if (filter === "id" && account) {
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
    } else if (filter === "abc" && account) {
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
    }
  }, [filter, account]);

  return (
    <div className="Profile">
      {!setupProfile ? (
        <>
          <h2>{account?.userName}</h2>
          <img src={account?.avatar} id="profile-avatar" alt="profile-avatar" />
          <p>Total Score: {account?.totalScore}</p>
          <p>Pokémon Caught: {account?.caught.length}</p>
          <h3>Pokémon Collection:</h3>
          {account && account.caught.length > 0 ? (
            <p className="click">(Click on a Pokémon to view their Pokédex)</p>
          ) : (
            <p className="click">Start playing to Catch Em All!</p>
          )}
          {account && account.caught.length > 1 ? (
            filter === "id" ? (
              <button
                className="sort"
                onClick={() => {
                  setFilter("abc");
                }}
              >
                Sort by Name
              </button>
            ) : (
              <button
                className="sort"
                onClick={() => {
                  setFilter("id");
                }}
              >
                Sort by Pokédex Number
              </button>
            )
          ) : (
            <></>
          )}

          <ul>
            {showPokemon?.map((pokemon, index) => (
              <li
                className="pokemon-caught"
                onClick={() => renderPokedex(pokemon.id)}
                key={`${pokemon.id}${Math.random()}${index}`}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <p>{toTitleCase(pokemon.name)}</p>
                <p>{`#${pokemon.id}`}</p>
              </li>
            ))}
          </ul>
          {showPokedex && (
            <div className="pokedex-container">
              <div className="pokedex">
                <h2>Pokédex:</h2>
                <img
                  src={pokedex?.sprites?.front_default}
                  alt={pokedex?.name}
                />
                <p>Name: {pokedex?.name}</p>
                <p>Type: {pokedex?.types && pokedex?.types[0].type.name}</p>
                <p>Number: {pokedex?.id}</p>
                <button onClick={() => setShowPokedex(false)}>Close</button>
              </div>
            </div>
          )}
          <button onClick={() => showSetupProfile(true)}>Edit Profile</button>
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
          <Link to="/play">
            <button>Return Home</button>
          </Link>
        </>
      ) : (
        <Signup
          usernameProp={account?.userName!}
          avatarProp={account?.avatar!}
          editMode={true}
        />
      )}
    </div>
  );
};

export default Profile;
