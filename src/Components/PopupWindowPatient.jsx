import React from "react";
import "./PopupWindowPatient.css";

function PopupWindowPatient({ onClose }) {
  return (
    <div className="popup-content">
      <div className="patient-popup">
        <div className="patient-contentpopup">
          <img
            id="exit-icon"
            src="/images/Exit.svg"
            alt="exit icon"
            onClick={onClose}
          />
          <img
            id="bankid-icon"
            src="/images/BankID-black.svg"
            alt="BankID icon"
          />
          <button className="bankid-btn" id="bankid-btn1">
            Sign in with&nbsp;<strong>BankID</strong>
          </button>
          <button className="bankid-btn" id="bankid-btn2">
            Sign in with&nbsp;<strong>BankID</strong>&nbsp;on a different device
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupWindowPatient;
