import { FormEvent, useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { PokemonEasy } from "../models/Pokemon";
import { getRandomEasy } from "../services/PokemonService";
import { easyQthree, getFourOptionsQThree } from "../services/PossibleAnswers";
import "./EasyThree.css";
import player from "../assets/player.webp";

const EasyThree = () => {
  const [pokemon, setPokemon] = useState<PokemonEasy>();
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected3, setSelected3] = useState(0);
  const { currentPokemonID, currentScore, updateScore, setQuestionsAnswered } =
    useContext(GameContext);
  const getPercent = (currentScore: number): string => {
    return `${((currentScore / 3) * 100).toFixed(0)}%`;
  };
  const [effect, setEffect] = useState(false);
  let myTimeout: any;

  useEffect(() => {
    if (currentPokemonID) {
      getRandomEasy(currentPokemonID).then((res) => {
        console.log(res);
        setPokemon(res);
        setAnswers(getFourOptionsQThree(easyQthree, res.id));
      });
    }
    return () => {
      clearTimeout(myTimeout);
      setEffect(false);
    };
  }, [currentPokemonID]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setEffect(true);
    myTimeout = setTimeout(() => {
      setQuestionsAnswered(3);
    }, 1500);

    if (selected3 === pokemon?.id) {
      updateScore();
    }
  };

  return (
    <div className="EasyThree">
      <div className="hp-container">
        <div
          className={`${
            currentScore === 3
              ? "full"
              : currentScore === 2
              ? "two-thirds"
              : currentScore === 1
              ? "one-thirds"
              : "zero"
          } hp`}
          style={{ width: getPercent(currentScore) }}
        >
          HP: {getPercent(currentScore)}
        </div>
      </div>
      <div className="image-container">
        <img src={player} alt="player" />
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
      {effect && (
        <p className="effect">
          {selected3 === pokemon?.id
            ? "Your attack was super effective!"
            : "Your attack had no effect!"}
        </p>
      )}

      {pokemon && answers?.length > 0 && (
        <form onSubmit={submitHandler}>
          <h2>What's it's Pokédex number?</h2>
          <div className="question-container">
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[0].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[0]}
              />
              <label htmlFor={answers[0].toString()}>{answers[0]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[1].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[1]}
              />
              <label htmlFor={answers[1].toString()}>{answers[1]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[2].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[2]}
              />
              <label htmlFor={answers[2].toString()}>{answers[2]}</label>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="number"
                id={answers[3].toString()}
                onChange={(e) => setSelected3(+e.target.value)}
                value={answers[3]}
              />
              <label htmlFor={answers[3].toString()}>{answers[3]}</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default EasyThree;
