import React from 'react';
import RentwallexLogo from '../assets/Rentwallex_Logo_3.png';
import LinkIn from '../assets/linkedin.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const logoStyle = { width: '250px', height: 'auto', marginRight: '10px' };
  const iconsStyle = { width: '50px', height: 'auto', marginRight: '10px' };

  return (

    <footer>
      <div className='container'>
        {/* Left section */}
        <div className='left'>
          <Link to="/">
            <img src={RentwallexLogo} alt="Rentwallex Logo" style={logoStyle} />
          </Link>
          <div>
            <a href="/privacy">Privacy</a>
          </div>
          <div>
            <a href="/terms">Terms and Agreement</a>
          </div>
        </div>
        <br className='linebreak' />
        <br className='linebreak' />
        {/* Right section */}
        <div className='right'>
          <img src={LinkIn} alt="LinkedIn" style={iconsStyle} />
          <img src={Facebook} alt="Facebook" style={iconsStyle} />
          <img src={Instagram} alt="Instagram" style={iconsStyle} />
          <img src={Twitter} alt="Twitter" style={iconsStyle} />
        </div>
        <br className='linebreak' />
        <br className='linebreak'/>
      </div>

      
    </footer>
  );
}
