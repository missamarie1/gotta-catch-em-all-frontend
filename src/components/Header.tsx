import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="pokemon" />
      <h1>Gotta Catch Em All</h1>
    </header>
  );
};

export default Header;
