import React from "react";

const Pin = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className="pin">
      <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
        <span className="circleText" title={tooltip}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Pin;
