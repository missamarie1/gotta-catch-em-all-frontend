import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { account } = useContext(AuthContext);

  return (
    <div className="Profile">
      <h2>{account!.userName}</h2>
      //avatar img
      <ul>
        {account!.caught.map((pokemon) => (
          <li>
            <p>{pokemon.name}</p>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
