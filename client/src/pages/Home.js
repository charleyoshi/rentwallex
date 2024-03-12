import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import HowItWorks from "../components/howItWorks";
import dummy_picture from '../assets/picture_placeholder.png'
import { Link } from 'react-router-dom';


//Can Input Any Question and Answer Here: (Can Be Moved to Database)
const FAQs = [
  {
    question: "What is Rentwallex?",
    answer: "Rentwallex is a rent financing service that offers innovative solutions for tenants to manage their rental expenses conveniently through installment payment options."
  },
  {
    question: "Who can use Rentwallex?",
    answer: "Rentwallex is available to tenants across various rental properties, including apartments, houses, and commercial spaces. Whether you're a student, young professional, or anyone renting a property, our service offers flexibility and peace of mind."
  },
  {
    question: "Can I use Rentwallex for any rental property?",
    answer: "Yes, Rentwallex can be used for most rental properties, including apartments, houses, and condominiums. As long as your landlord or property manager accepts rent payments through our platform, you can benefit from our service."
  },
  {
    question: "What sets Rentwallex apart from other rent financing services?",
    answer: "Rentwallex stands out for its focus on providing flexible solutions tailored to tenants' needs. We prioritize user convenience, security, and transparency, making us the preferred choice for hassle-free rent payments."
  },
  {
    question: "When can I start using Rentwallex?",
    answer: "Be the first on know when we launch in your city. Registered now to join the waitlist. Become part of the movement to make rent payment flexible and hassle-free."
  }
  // Add more FAQs as needed
];

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home">
      <Navbar forPage="home" />
      <div className="container">
        <section className="one">
          <div className="left">
            <h1 className="headline">
              Rentwallex is the <br />
              new way to pay rent
            </h1>
            <h4 className="headline-2">
              Don&#39;t let rent payments weigh you down any longer. Start enjoying the freedom of flexible rent payment.
            </h4>
            {/* <Button text="Find a rent" icon="home" theme="secondary" />
          <Button text="Register my rent" icon='apartment' /> */}
            <Link to="/waitlist">
              <Button text="Join Waitlist" />
            </Link>

          </div>
          <br className='linebreak'/>
          <div className="right">
            <img
              referrerPolicy="no-referrer"
              src={dummy_picture}
              alt="dummy_picture"
              width="100%"
            />
          </div>
        </section>
      </div>

      <div className='container'>
        <section className="two">
          <HowItWorks />
        </section>
      </div>


      <div className="bgWrapper-purple">
        <section className="three container">
          <h1>1,250</h1>
          <h4>Renters registered to date</h4>
          <h5>Become part of a growing community of renters who are taking control of their finances with
            Rentwallex. <br />Say goodbye to rent-related stress and hello to peace of mind!</h5>
          <br />
          <Link to="/waitlist">
            <Button text="Join the Waitlist now" theme="secondary" />
          </Link>
        </section>
      </div>



      <div className='container'>
        <section className='four'>
          <h2>Frequently Asked Questions</h2>
          {FAQs.map((FAQ, index) => (
            <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
              <div className='Question'>
                <h3>{FAQ.question}</h3><button >{activeIndex === index ? '–' : '+'}</button>
              </div>
              {activeIndex === index && <div className="Answer">{FAQ.answer}</div>}
            </div>
          ))}
          <br /><br />
        </section>
      </div>
    </div>
  );
}
//▲