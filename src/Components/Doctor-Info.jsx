import React from "react";
import "../Styles/Doctor-Info.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DoctorInfo = () => {
  return (
    <div className="container">
      <div className="doctor-card">
        <div className="doctor-image">
          <img src="./images/DoctorImage.jpg" alt="Doctor" />
          <div className="edit-icon">
            <i className="fas fa-pen"></i>
          </div>
        </div>
        <div className="doctor-info">
          <div className="doctor-name">
            <h2>Dr. Aubrey Graham</h2>
          </div>
          <div className="doctor_details">
            <p>Profession:Primary Care Physician</p>
            <p>Employee ID: MED-456789</p>
            <p>Employer: OmniWell Care</p>
            <button className="more-button">
              <span className="more">MORE</span>
              <span className="ArrowBlack">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000000"
                >
                  <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="button btn1">
          BOOK NOW
          <span className="icon">
            <img
              className="arrow-Icon arrow1"
              src="./images/Arrow-white.svg"
              alt="Log in arrow"
            />
          </span>
        </div>
        <div className="button btn2 ">
          SEARCH FOR PATIENTS
          <span>
            <img
              className="arrow-Icon"
              src="./images/Arrow-white.svg"
              alt="Log in arrow"
            />
          </span>
        </div>

        <div className="upcoming">UPCOMING APPOINTMENTS</div>
        <div className="appointment-card">
          <div className="appointment-text">
            <p>Patient </p>

            <p>Samira Johnsson</p>

            <p> today at 14:00.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorInfo;
