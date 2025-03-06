import React from "react";
import "../Styles/Healio.css";
import SvgIcons from "../Components/SvgIcons";
import logo from "../image/logo.svg";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-icons">
          <SvgIcons />
        </div>
        <h1 className="hero-title">Healio</h1>
        <p className="hero-subtitle">All of you in one place</p>
        <button className="hero-button">
          Sign up
          <svg
            width="25"
            height="14"
            viewBox="0 0 21 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "8px",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.53614 18.8355C10.6103 17.7296 10.6103 15.97 9.53614 14.8641L1.12875 6.20852C0.0545508 5.10261 0.054549 3.34296 1.12875 2.23705L2.42311 0.904495C3.54242 -0.247859 5.39249 -0.247858 6.5118 0.904495L20.0711 14.8641C21.1454 15.97 21.1453 17.7296 20.0711 18.8355L6.5118 32.7951C5.39249 33.9475 3.54242 33.9475 2.42311 32.7951L1.12875 31.4626C0.0545511 30.3566 0.0545519 28.597 1.12876 27.4911L9.53614 18.8355Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="hero-decor">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};
export default HeroSection;
