import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroHeaderText PrimaryTextColor">
        <p>Shop our freshest</p>
        <h1 className="SecondaryTextColor">Fresh hand-Picked Vegetables</h1>
        <h1>Everyday</h1>
      </div>
      <div className="heroHeaderImage"></div>
    </div>
  );
}

export default Hero;
