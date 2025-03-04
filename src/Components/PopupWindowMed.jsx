import React from "react";
import "./PopupWindowMed.css";

function PopupWindowMed({ onClose }) {
  return (
    <div className="popup-content">
      <div className="medsaff-popup">
        <div className="medstaff-content">
          <img
            id="exit-icon"
            src="/images/Exit.svg"
            alt="exit icon"
            onClick={onClose}
          />

          <p>Staff Number</p>
          <input id="sign-inmed" type="text" placeholder="B123-445B124" />
          <p>Password</p>
          <input id="sign-inmed" type="password" placeholder="*********" />
          <button className="signin-btnmed">
            LOG IN
            <img
              id="arrow-login"
              src="./images/Arrow-white.svg"
              alt="Log in arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupWindowMed;
