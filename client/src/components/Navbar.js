import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/rentwallex_logo_cropped.png";
import { useState } from "react";

// props for Navbar:
//  - forPage : specify for which page. e.g. `home`
//              default value is `home`
export default function Navbar(props) {
  var forPage = props.forPage;
  try {
    forPage = forPage.toLowerCase();
  } catch (error) {
    forPage = "home";
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="Navbar">
      <div className="container">
        <Link to="/">
          <img className="logo" height={68} src={logo} alt="logo" />
        </Link>
        <div className="right">
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="icon-menu material-symbols-rounded">menu</span>
          </div>
          <div className={`menu-items ${menuOpen ? "open" : ""}`}>
            <Link to="/mission">Who we are</Link>
            <Link>Use case</Link>
            <Link>How it works</Link>
            <Link to="/for-property-manager">For Property Managers</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
