import React, { useState } from "react";
import "../Css/howItWorks.css";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";

function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      title: "Step 1",
      content: "This is the first step. Here's some more information about it.",
      image: Logo1,
    },
    {
      title: "Step 2",
      content:
        "This is the second step. Here's some more information about it.",
      image: Logo2,
    },
    {
      title: "Step 3",
      content: "This is the third step. Here's some more information about it.",
      image: Logo3,
    },
  ];

  const handleStepClick = (index) => {
    setSelectedStep(index === selectedStep ? null : index);
  };

  return (
    <div className="App">
      <h1>How it Works</h1>
      <div className="steps-container">
        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${selectedStep === index ? "active" : ""}`}
              onClick={() => handleStepClick(index)}
            >
              <h2>{step.title}</h2>
              {selectedStep === index && <p>{step.content}</p>}
            </div>
          ))}
        </div>
        <div className="image-container">
          {selectedStep !== null && (
            <img
              src={steps[selectedStep].image}
              alt={`Step ${selectedStep + 1}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
