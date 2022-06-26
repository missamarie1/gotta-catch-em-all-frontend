import "./Header.css";
import logo from "../assets/logo.png";
import { Howl } from "howler";

const Header = () => {
  // music
  const music = new Howl({
    src: [
      "https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/ncplxpiydy/03%20Title%20Screen.mp3",
    ],
    volume: 0.1,
  });

  return (
    <header className="Header">
      <i className="fa-solid fa-volume-high" onClick={() => music.play()}></i>
      <i className="fa-solid fa-volume-xmark" onClick={() => music.stop()}></i>
      <img src={logo} alt="pokemon" />
      <div className="gotta-catch-em-all">
        <h1>GOTTA CATCH EM ALL</h1>
      </div>
    </header>
  );
};

export default Header;
