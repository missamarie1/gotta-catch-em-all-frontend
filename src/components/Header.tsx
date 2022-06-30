import "./Header.css";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  audio.volume = 0.1;
  return { playing, toggle };
};

const Header = () => {
  const { playing, toggle } = useAudio(
    "https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/ncplxpiydy/03%20Title%20Screen.mp3"
  );

  return (
    <header className="Header">
      {!playing ? (
        <i className="fa-solid fa-volume-xmark" onClick={toggle}></i>
      ) : (
        <i className="fa-solid fa-volume-high" onClick={toggle}></i>
      )}

      <img src={logo} alt="pokemon" className="logo" />
      <h1>GOTTA CATCH EM ALL</h1>
    </header>
  );
};

export default Header;
