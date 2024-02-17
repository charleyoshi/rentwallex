import React from "react";
import Navbar from "../components/Navbar";
import RentalForm from "../components/RentalForm";

export default function WaitList() {
  return (
    <div className="waitlist">
      <Navbar />
      <div className="pageWrapper">
        <div className="left">
          <h3>Join Rentwallex community to revolutionize e rent payment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="right" id="pptRight">
          <h3>The wait list from for renters goes here</h3>
          <RentalForm />
        </div>
      </div>
    </div>
  );
}
