import MemberLogInClick from "./MemberLog";
import SignUpButton from "./Sign-Up-Button";
import InputField from "./InputField";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="signUpForm-Container">
      <h1 className="tagLine">All of you. in one place</h1>
      <div className="form-content">
        <h3>Sign up now</h3>
        <InputField />
        <MemberLogInClick />
        <SignUpButton />
      </div>
    </div>
  );
};
export default SignUpPage;
