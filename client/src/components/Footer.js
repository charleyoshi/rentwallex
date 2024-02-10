import React from 'react';
import RentwallexLogo from '../assets/Rentwallex_Logo_3.png';
import LinkIn from '../assets/LinkIn.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Twitter from '../assets/Twitter.png';

export default function Footer() {
  const logoStyle = { width: '250px', height: 'auto', marginRight: '10px' };
  const iconsStyle = { width: '50px', height: 'auto', marginRight: '10px' };

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Left section */}
      <div>
        <img src={RentwallexLogo} alt="Rentwallex Logo" style={logoStyle} />
      </div>

      {/* Middle section */}
      <div>
        <a href="/privacy">Privacy</a>
      </div>
      <div>
        <a href="/terms">Terms and Agreement</a>
      </div>

      {/* Right section */}
      <div>
        <img src={LinkIn} alt="LinkedIn" style={iconsStyle} />
        <img src={Facebook} alt="Facebook" style={iconsStyle} />
        <img src={Instagram} alt="Instagram" style={iconsStyle} />
        <img src={Twitter} alt="Twitter" style={iconsStyle} />
      </div>
    </footer>
  );
}
