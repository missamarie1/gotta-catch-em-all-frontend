import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="pokemon" />
      <div className="gotta-catch-em-all">
        <h1>GOTTA CATCH EM ALL</h1>
      </div>
    </header>
  );
};

export default Header;
