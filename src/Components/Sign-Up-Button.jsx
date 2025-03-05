import React from "react";
import "../Styles/Sign-Up-Button.css";

const SignUpButton = () => {
  return (
    <button className="signIn-Btn">
      <span class="text">SIGN UP</span>
      <span class="icon">
        <img
          className="arrow-Icon"
          src="./images/Arrow-white.svg"
          alt="Log in arrow"
        />
      </span>
    </button>
  );
};
export default SignUpButton;
