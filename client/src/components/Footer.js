import React from 'react';
import RentwallexLogo from '../assets/Rentwallex_Logo_3.png';
import linkedIn from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
// import instagram from '../assets/instagram.png';
// import twitter from '../assets/twitter.png';
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
          <img src={linkedIn} alt="LinkedIn" style={iconsStyle} />
          <img src={facebook} alt="Facebook" style={iconsStyle} />
          <img src={linkedIn} alt="LinkedIn" style={iconsStyle} />
          <img src={facebook} alt="Facebook" style={iconsStyle} />
          {/* <img src={instagram} alt="Instagram" style={iconsStyle} />
          <img src={twitter} alt="Twitter" style={iconsStyle} /> */}
        </div>
        <br className='linebreak' />
        <br className='linebreak'/>
      </div>

      
    </footer>
  );
}
