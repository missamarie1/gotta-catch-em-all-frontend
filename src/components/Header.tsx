import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="pokemon" />
    </header>
  );
};

export default Header;
