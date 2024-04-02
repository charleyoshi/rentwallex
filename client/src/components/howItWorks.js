import React, { useState } from "react";
import "../styles/howItWorks.css";
import dummy_picture from '../assets/picture_placeholder.png'
import homepage_howitworks_1 from '../assets/homepage_howitworks_1.png'
import homepage_howitworks_2 from '../assets/homepage_howitworks_2.png'
import homepage_howitworks_3 from '../assets/homepage_howitworks_3.png'
import homepage_howitworks_4 from '../assets/homepage_howitworks_4.png'
function HowItWorks() {


  return (
    <div className="howItWorks">
      <h1>How does Rentwallex work?</h1>
      <h2>We partner with property managers and registered landlords
        <br />
        to make it easy to split your rent into manageable payments.</h2>
      <div className="steps">
        <div className="step">
          {/* <p>Step 1</p> */}
          <div className="iconWrapper">
            <img src={homepage_howitworks_1} alt="How it works - 1" />
          </div>
          <h3 style={{ fontWeight: 'bold' }}>Get Approved</h3>
          <h4>Sign up in minutes. Our simple approval process ensures hassle-free
            access to our community financing solutions.</h4>
        </div>
        <br className='linebreak' />
        <br className='linebreak' />
        <div className="step">
          <div className="iconWrapper">
            <img src={homepage_howitworks_2} alt="How it works - 2" />
          </div>
          <h3 style={{ fontWeight: 'bold' }}>Customize your payment</h3>
          <h4>Select the rent payment plan that best fits your budget and
            preferences. Rentwallex provides interest free, community financing that aligns with your income.</h4>
        </div>
        <br className='linebreak' />
        <br className='linebreak' />
        <div className="step">
          <div className="iconWrapper">
            <img src={homepage_howitworks_3} alt="How it works - 3" />
          </div>
          <h3 style={{ fontWeight: 'bold' }}>Seamless rent payment</h3>
          <h4>Your rent is paid directly to your property manager or registered landlord in full. No late payment. No harassment.</h4>
        </div>
        <br className='linebreak' />
        <br className='linebreak' />
        <div className="step">
          <div className="iconWrapper">
            <img src={homepage_howitworks_4} alt="How it works - 4" />
          </div>
          <h3 style={{ fontWeight: 'bold' }}>Enjoy true financial freedom</h3>
          <h4>Experience the freedom of manageable rent payments, allowing you to focus on what matters most.</h4>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
