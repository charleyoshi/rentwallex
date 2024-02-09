import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import HowItWorks from "../components/howItWorks";
import dummy_calendar from "../assets/dummy_calendar.png";

export default function Home() {
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
            <Button text="Join Waitlist" />
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
      <section className="four">(FAQs)</section>
    </div>
  );
}
