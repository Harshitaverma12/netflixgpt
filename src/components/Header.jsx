import React from "react";
import logo from "./../Assets/logo.png";

const Header = () => {
  return (
    <div className="absolute mx-9 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        style={{ marginTop: "-3rem" }}
        src={logo}
        alt="hello"
      />
    </div>
  );
};

export default Header;
