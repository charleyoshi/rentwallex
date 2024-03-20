import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
            <Link to="/who-we-are"style={{ fontWeight: 'bold' }}>Who we are</Link>
            <Link to="/usecase" style={{ fontWeight: 'bold' }}>Use case</Link>
            <Link to="/ourmap" style={{ fontWeight: 'bold' }}>Our Map</Link>
            <Link to="/for-property-manager" style={{ fontWeight: 'bold' }}>For Property Managers</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
