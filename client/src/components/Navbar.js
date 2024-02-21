import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/rentwallex_logo_cropped.png";

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

  return (
    <header className="Navbar">
      <div className="container">
        <Link to="/">
          <img
            className="logo"
            height={68}
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="right">
          <Link to="/mission">Who we are</Link>
          <Link>Use case</Link>
          <Link>How it works</Link>
          <Link>For Property Managers</Link>
          <span className="icon-menu material-symbols-rounded">menu</span>
        </div>
      </div>
    </header>
  );
}
