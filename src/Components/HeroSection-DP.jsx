import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../image/logo.svg";
import "../Styles/HeroSection-DP.css";

const HeroSectionDP = () => {
  return (
    <div class="profile-card">
      <div class="content">
        <h2>PROFILE</h2>
      </div>
      <div className="editContainer">
        <div class="edit">
          <span>EDIT</span>
          <i class="fas fa-pen"></i>
        </div>

        <div className="hero-decor">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
export default HeroSectionDP;
