import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { easy, getRandomEasy } from "../services/PokemonService";
import { easyQOne, getFourOptions } from "../services/PossibleAnswers";
import "./EasyOne.css";

const EasyOne = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const { currentScore, updateScore, setCurrentPokemonID } =
    useContext(GameContext);
  const navigate = useNavigate();
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  useEffect(() => {
    let randomEasy = easy[Math.floor(Math.random() * easy.length)];
    setCurrentPokemonID(randomEasy);
    getRandomEasy(randomEasy).then((res) => {
      console.log(res);
      setPokemon(res);
      setAnswers(getFourOptions(easyQOne, res.name));
    });
  }, []);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (selected === pokemon?.name) {
      updateScore();
    }
    //navigate to easy 2
    //also use context to stay with each pokemon throughout questions
    navigate("/");
  };

  return (
    <div className="EasyOne">
      <p>{currentScore}</p>
      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>Who's that Pokémon?</h2>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <input
            type="radio"
            name="who"
            id={answers[0]}
            onChange={(e) => setSelected(e.target.value)}
            value={answers[0]}
          />
          <label htmlFor={answers[0]}>{toTitleCase(answers[0])}</label>
          <input
            type="radio"
            name="who"
            id={answers[1]}
            onChange={(e) => setSelected(e.target.value)}
            value={answers[1]}
          />
          <label htmlFor={answers[1]}>{toTitleCase(answers[1])}</label>
          <input
            type="radio"
            name="who"
            id={answers[2]}
            onChange={(e) => setSelected(e.target.value)}
            value={answers[2]}
          />
          <label htmlFor={answers[2]}>{toTitleCase(answers[2])}</label>
          <input
            type="radio"
            name="who"
            id={answers[3]}
            onChange={(e) => setSelected(e.target.value)}
            value={answers[3]}
          />
          <label htmlFor={answers[3]}>{toTitleCase(answers[3])}</label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyOne;
