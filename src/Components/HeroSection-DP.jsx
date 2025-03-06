import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../image/logo.svg";
import "../Styles/HeroSection-DP.css";

const HeroSectionDP = () => {
  return (
    <div className="profile-card">
      <div className="content">
        <h2>PROFILE</h2>
      </div>
      <div className="editContainer">
        <div className="edit">
          <span>EDIT</span>
          <i className="fas fa-pen"></i>
        </div>

        <div className="hero-decor">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
export default HeroSectionDP;
