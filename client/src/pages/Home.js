import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import HowItWorks from "../components/howItWorks";
import dummy_calendar from "../assets/dummy_calendar.png";

//Can Input Any Question and Answer Here: (Can Be Moved to Database)
const FAQs = [
  {
    question: "What is Cozii?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
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
      <div className="bgWrapper-primary">
        <section className="one">
          <div className="left">
            <h1 className="headline">
              Did you know that you can split your rent into small payment?
            </h1>
            <h4 className="headline-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </h4>
            {/* <Button text="Find a rent" icon="home" theme="secondary" />
          <Button text="Register my rent" icon='apartment' /> */}
            <Link to="/waitlist">
              <Button text="Join Waitlist" />
            </Link>
          </div>
          <div className="right">
            <img
              referrerPolicy="no-referrer"
              src={dummy_calendar}
              alt="dummy_calendar"
              width="100%"
            />
          </div>
        </section>
      </div>

      <section className="two">
        <HowItWorks />
      </section>

      <div className="bgWrapper-purple">
        <section className="three">
          <h1>150</h1>
          <h4>Renters across Canada are excited to try Rentwallex</h4>
        </section>
      </div>
      <section className="four">
        <h2>Frequently Asked Questions</h2>
        {FAQs.map((FAQ, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleAnswer(index)}
          >
            <div className="Question">
              <h3>{FAQ.question}</h3>
              <button>{activeIndex === index ? "-" : "+"}</button>
            </div>
            {activeIndex === index && <p classname="Answer">{FAQ.answer}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
//▲
