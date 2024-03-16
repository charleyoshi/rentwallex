import { Link, unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/rentwallex_logo_cropped.png";
import { useRef, useState } from "react";

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
  
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    const isHomePage = location.pathname === '/';
    if (isHomePage) {
      scrollToSection("how-it-works");
    } else {
      navigateToHomeAndScroll();
    }
  };

  const navigateToHomeAndScroll = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      scrollToSection("how-it-works");
    }, 100); // Adjust the delay as needed
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
            <Link to="/who-we-are">Who we are</Link>
            <Link to="/usecase">Use case</Link>
            <Link to="/ourmap">Our Map</Link>
            <a onClick={handleHowItWorksClick}>How it works</a> 
            <Link to="/for-property-manager">For Property Managers</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
