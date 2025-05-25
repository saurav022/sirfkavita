import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import logo from "./Assets/Logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>
        SIRF KAVITA OPEN MIC{" "}
        <span>
          <i className="fa-solid fa-microphone-lines"></i>
        </span>
      </h1>
    </header>
  );
};

export default Header;
