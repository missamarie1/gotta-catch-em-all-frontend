import { ReactNode, useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon";
import { hardPokemon } from "../services/HardAnswers";
import { medPokemon } from "../services/MedAnswers";
import { getRandomEasy } from "../services/PokemonService";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState<number>(3);
  const [challengeLevel, setChallengeLevel] = useState("");
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [caught, setCaught] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const OneThirdsChance = [false, false, true];
  const TwoThirdsChance = [true, true, false];
  const OneFourthsChance = [true, false, false, false];
  const TwoFourthsChance = [true, true, false, false];
  const ThreeFourthsChance = [true, true, true, false];
  const OneFifthsChance = [true, false, false, false, false];
  const TwoFifthsChance = [true, true, false, false, false];
  const ThreeFifthsChance = [true, true, true, false, false];
  const updateScore = () => {
    setCurrentScore((prev) => {
      return prev - 1;
    });
  };

  const getAndSetPokemon = (difficulty: string, id: number) => {
    if (difficulty === "easy") {
      getRandomEasy(id).then((res) => {
        setCurrentPokemon(res);
      });
    } else if (difficulty === "med") {
      const foundPokemon = medPokemon.find((pokemon) => pokemon.id === id);
      if (foundPokemon) {
        getRandomEasy(id).then((res) => {
          foundPokemon.sprites = res.sprites;
          setCurrentPokemon(foundPokemon);
        });
      }
    } else if (difficulty === "hard") {
      const foundPokemon = hardPokemon.find((pokemon) => pokemon.id === id);
      if (foundPokemon) {
        getRandomEasy(id).then((res) => {
          foundPokemon.sprites = res.sprites;
          setCurrentPokemon(foundPokemon);
        });
      }
    }
  };

  useEffect(() => {
    let randomNumberEasy = Math.floor(Math.random() * 3);
    let randomNumberMed = Math.floor(Math.random() * 5);
    let randomNumberHard = Math.floor(Math.random() * 7);
    if (questionsAnswered === 3 && challengeLevel === "easy") {
      if (!currentScore) {
        setCaught(true);
      } else if (currentScore === 2 && challengeLevel === "easy") {
        let result = OneThirdsChance[randomNumberEasy];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "easy") {
        let result = TwoThirdsChance[randomNumberEasy];
        setCaught(result);
      }
    } else if (questionsAnswered === 3 && challengeLevel === "med") {
      if (!currentScore) {
        let result = ThreeFourthsChance[randomNumberMed];
        setCaught(result);
      } else if (currentScore === 2 && challengeLevel === "med") {
        let result = OneFourthsChance[randomNumberMed];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "med") {
        let result = TwoFourthsChance[randomNumberMed];
        setCaught(result);
      }
    } else if (questionsAnswered === 3 && challengeLevel === "hard") {
      if (!currentScore) {
        let result = ThreeFifthsChance[randomNumberHard];
        setCaught(result);
      } else if (currentScore === 2 && challengeLevel === "hard") {
        let result = OneFifthsChance[randomNumberHard];
        setCaught(result);
      } else if (currentScore === 1 && challengeLevel === "hard") {
        let result = TwoFifthsChance[randomNumberHard];
        setCaught(result);
      }
    }
  }, [questionsAnswered, challengeLevel]);

  return (
    <GameContext.Provider
      value={{
        currentScore,
        setCurrentScore,
        updateScore,
        challengeLevel,
        setChallengeLevel,
        questionsAnswered,
        setQuestionsAnswered,
        currentPokemon,
        getAndSetPokemon,
        caught,
        setCaught,
        setCurrentPokemon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
