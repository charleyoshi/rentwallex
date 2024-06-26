import React from 'react';
import RentwallexLogo from '../assets/Rentwallex_Logo_3.png';
import linkedIn from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const logoStyle = { width: '250px', height: 'auto', marginRight: '10px' };
  const iconsStyle = { width: '50px', height: 'auto', marginRight: '10px', borderRadius: '50px' };

  return (

    <footer>
      <div className='container'>
        {/* Left section */}
        <div className='left'>
          <Link to="/">
            <img src={RentwallexLogo} alt="Rentwallex Logo" style={logoStyle} />
          </Link>
          <div>
            <Link to="/Privacy">Privacy</Link>
          </div>
          <div>
            <Link to="/TermAndAgreement">Terms and Agreement</Link>
          </div>
        </div>
        <br className='linebreak' />
        <br className='linebreak' />
        {/* Right section */}
        <div className='right'>
          <Link target="_blank" to="https://www.linkedin.com/company/rentwallex/">
            <img src={linkedIn} alt="LinkedIn" style={iconsStyle} />
          </Link>

          <img src={facebook} alt="Facebook" style={iconsStyle} />

          <Link target="_blank" to="https://www.instagram.com/rentwallex/">
            <img src={instagram} alt="Instagram" style={iconsStyle} />
          </Link>
          <Link target='_blank' to="https://twitter.com/rentwallex">
            <img src={twitter} alt="Twitter" style={iconsStyle} />
          </Link>


        </div>
        <br className='linebreak' />
        <br className='linebreak' />
      </div>


    </footer>
  );
}
