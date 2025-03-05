import React from "react";
import "../Styles/InputField.css";

const InputField = () => {
  return (
    <div className="inputField-Container">
      <div className="name">
        <input type="text" placeholder="First Name" className="name1"></input>
        <input type="text" placeholder="Last Name" className="name2"></input>
      </div>
      <input type="email" placeholder="Email"></input>
      <input type="date" placeholder="Birthdate"></input>
      <input type="password" placeholder="Password"></input>
      <input type="password" placeholder="Confirm Password"></input>
    </div>
  );
};
export default InputField;
