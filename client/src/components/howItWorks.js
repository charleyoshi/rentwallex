import React, { useState } from "react";
import "../styles/howItWorks.css";
import dummy_picture from '../assets/dummy_picture.png'
function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      title: "Step 1",
      content: "This is the first step. Here's some more information about it.",
      image: dummy_picture,
    },
    {
      title: "Step 2",
      content:
        "This is the second step. Here's some more information about it.",
      image: dummy_picture,
    },
    {
      title: "Step 3",
      content: "This is the third step. Here's some more information about it.",
      image: dummy_picture,
    },
  ];

  const handleStepClick = (index) => {
    setSelectedStep(index === selectedStep ? null : index);
  };

  return (
    <div className="howItWorks">
      <h1>How does Rentwallex work?</h1>
      <h2>We partner with property managers and registered landlords to make it easy to split your rent into manageable payments.</h2>
      <div className="steps">
        <div className="step">
          <p>Step 1</p>
          <img src={dummy_picture} alt="dummy_picture" />
          <h3>Get Approved</h3>
          <h4>Sign up in minutes. Our simple approval process ensures hassle-free
            access to our community financing solutions.</h4>
        </div>
        <br className='linebreak'/>
        <br className='linebreak'/>
        <div className="step">
          <p>Step 2</p>
          <img src={dummy_picture} alt="dummy_picture" />
          <h3>Customize your payment</h3>
          <h4>Select the rent payment plan that best fits your budget and
            preferences. We help you to customize repayment based on your pay slip, ensuring a
            seamless alignment with your income.</h4>
        </div>
        <br className='linebreak'/>
        <br className='linebreak'/>
        <div className="step">
          <p>Step 3</p>
          <img src={dummy_picture} alt="dummy_picture" />
          <h3>Seamless rent payment</h3>
          <h4>Once your payment plan is set, Rentwallex facilitates
            automated, no-interest community financing. Your rent is paid directly to your property
            manager or registered landlord in full. No late payment. No harassment.</h4>
        </div>
        <br className='linebreak'/>
        <br className='linebreak'/>
        <div className="step">
          <p>Step 4</p>
          <img src={dummy_picture} alt="dummy_picture" />
          <h3>Enjoy true financial freedom</h3>
          <h4>Experience the freedom of manageable rent payments,
            allowing you to focus on what matters most.</h4>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
