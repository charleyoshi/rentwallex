import React from "react";

const Pin = ({ text, tooltip, $hover, handleClick, handlePinHover }) => {
  // const handleClick = () => {
  //   console.log(`You clicked on ${tooltip}`);
  // };


  return (
    <div className="pin"  onClick={handleClick} onMouseOver={handlePinHover}>
      <div className={$hover ? "circle hover" : "circle"}>
        <span className="circleText" title={tooltip}>
          {/* {text} */}
        </span>
      </div>
    </div>
  );
};

export default Pin;
