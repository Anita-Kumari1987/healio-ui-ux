import React from 'react';
import '../styles/Profile.css';
import logo from '../image/logo.svg'; 
import patient from '../image/patient.png'; 

import profile from '../image/profile2.svg'; 

const Profile = () => {
  return (
    <main className="profile-container">
        <div className="profile-hero">
      <h1>PROFILE</h1>
      <div className="profile-hero-content">
        <div className="profile-hero-image">
          <img src={logo} alt="Profile Logo" />
        </div>
         </div>

        <div className="patient-container">
          <div className="profile-left">
            <img src={patient} alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h2>Samira Johnsson</h2>
              <ul>
                <li><strong>Birthdate:</strong> 29-09-2000</li>
                <li><strong>Gender:</strong> Female</li>
                <li><strong>Emergency Contact:</strong> Mom</li>
                <li><strong>Insurance:</strong> Folksame</li>
              </ul>
              <button className="profile-btn">
             More
                <svg
            className="arrow-icon"
            width="20"
            height="20"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4999 28L28.6666 21M28.6666 21L21.4999 14M28.6666 21H14.3333M39.4166 21C39.4166 30.665 31.395 38.5 21.4999 38.5C11.6048 38.5 3.58325 30.665 3.58325 21C3.58325 11.335 11.6048 3.5 21.4999 3.5C31.395 3.5 39.4166 11.335 39.4166 21Z"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
              </button>
            </div>
          </div>

          {/* Right Section with another SVG */}
          <div className="profile-right">
            <img src={profile} alt="Profile Detail" className="profile-right-svg" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

