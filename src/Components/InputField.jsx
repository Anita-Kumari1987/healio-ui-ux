import React from "react";
const InputField = () => {
  return (
    <div className="inputField-Container">
      <div className="name">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
      </div>
      <input type="email" placeholder="Email"></input>
      <input type="date" placeholder="Birthdate"></input>
      <input type="password" placeholder="Password"></input>
      <input type="password" placeholder="Confirm Password"></input>
    </div>
  );
};
export default InputField;
