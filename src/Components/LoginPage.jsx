import React, { useState } from "react";
import "./LoginPage.css";
import PopupWindowPatient from "./PopupWindowPatient";
import PopupWindowMed from "./PopupWindowMed";

function LoginPage() {
  const [showPopup, setShowPopup] = useState(null);

  // Function to open the right pop-up
  const handleButtonClick = (type) => {
    setShowPopup(type);
  };

  // Function to close the pop-up
  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div>
      <div className={showPopup ? "blur-background" : ""}>
        <section className="sign-in">
          <h2>All of you, in one place</h2>

          <section className="signin-as">
            <section className="patient-inlog">
              <p>SIGN IN AS</p>
              <button
                id="patientBtn"
                onClick={() => handleButtonClick("patient")}
              >
                PATIENT
                <img
                  className="arrow-icon"
                  src="/images/Arrow-white.svg"
                  alt="Arrow icon"
                />
              </button>
              <p>
                Not a member? <span className="signup-link">Sign up</span>
              </p>
            </section>

            <section className="med-inlog">
              <p>SIGN IN AS</p>
              <button id="medBtn" onClick={() => handleButtonClick("medStaff")}>
                MEDICAL STAFF
                <img
                  className="arrow-icon"
                  src="/images/Arrow-black.svg"
                  alt="Arrow icon"
                />
              </button>
            </section>
          </section>
        </section>
      </div>

      {/* Render the correct pop-up based on the value of showPopup */}
      {showPopup === "patient" && (
        <div className="popup-overlay">
          <PopupWindowPatient onClose={handleClosePopup} />
        </div>
      )}
      {showPopup === "medStaff" && (
        <div className="popup-overlay">
          <PopupWindowMed onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;
