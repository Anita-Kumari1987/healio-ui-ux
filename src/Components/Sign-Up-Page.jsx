import MemberLogInClick from "./MemberLog";
import SignUpButton from "./Sign-Up-Button";
import InputField from "./InputField";
import React from "react";
import "../Styles/Sign-Up-Page.css";
import WebsiteName from "./WebsiteName";

const SignUpPage = () => {
  return (
    <div className="signUpForm-Container">
      <div className="left-Half">
        <h1 className="tagLine">All of you. in one place</h1>
        <div className="form-content">
          <h3>Sign up now</h3>
          <InputField />
          <MemberLogInClick />
          <SignUpButton />
        </div>
      </div>
      <div className="right-Half">
        <h1 className="website_Name">Healio</h1>
      </div>
    </div>
  );
};
export default SignUpPage;
