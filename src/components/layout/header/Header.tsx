import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerContainer SecondaryBg">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>Home</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
