import React from 'react';
import '../styles/Healio.css';
import SvgIcons from "../Components/SvgIcons";
import doctorpic from '../image/doctorpic.svg';
import ArrowContent from '../Components/ArrowContent';
import { FaSearch, FaMicrophone } from "react-icons/fa";
import doctorIcon from '../image/doctor-icon.svg';
import prescriptionIcon from '../image/prescription-icon.svg';
import healioIcon from '../image/healio-icon.svg';
import specialistIcon from '../image/specialist-icon.svg';
import logo from '../image/logo.svg';

export default function Healio() {
  return (
    <div className="container">
     
      <div className="hero-container">
 <div className="hero-content">
 <div className="hero-icons">
 <SvgIcons />
 </div>
 <h1 className="hero-title">Healio</h1>
 <p className="hero-subtitle">All of you in one place</p>
 <button className="hero-button">
  Sign up
  <svg
    width="25"
    height="14"
    viewBox="0 0 21 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "8px" }} /* Adds space between text and icon */
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.53614 18.8355C10.6103 17.7296 10.6103 15.97 9.53614 14.8641L1.12875 6.20852C0.0545508 5.10261 0.054549 3.34296 1.12875 2.23705L2.42311 0.904495C3.54242 -0.247859 5.39249 -0.247858 6.5118 0.904495L20.0711 14.8641C21.1454 15.97 21.1453 17.7296 20.0711 18.8355L6.5118 32.7951C5.39249 33.9475 3.54242 33.9475 2.42311 32.7951L1.12875 31.4626C0.0545511 30.3566 0.0545519 28.597 1.12876 27.4911L9.53614 18.8355Z"
      fill="white"
    />
  </svg>
</button>

 </div>
 <div className="hero-decor">
 <img src={logo} alt="Logo" />
 </div>
 </div>


 <div className="main-section">
 <div className="text-container">
 <div className="text-section-main left">
 <h2>All of you, in one place</h2>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
 nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
 volutpat. Ut wisi enim ad minim veniam, quis.
 </p>
 </div>


 <div className="text-section-main right">
 <h2>No more unreadable scribbles</h2>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
 nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
 volutpat. Ut wisi enim ad minim veniam, quis.
 </p>
 </div>
 </div>


 <div className="doctor-update">
 <div className="text-section">
 <h2>Live updates from your doctors</h2>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
 nonummy nibh euismod.
 </p>
 <ul>
 <li>Lorem ipsum dolor sit amet</li>
 <li>Lorem ipsum dolor sit</li>
 <li>Lorem ipsum</li>
 </ul>
 </div>


 <div className="doctor-container">
 <img src={doctorpic} alt="Doctor" className="doctor-image" />
 <div className="testimonial">
 <p>
 "Great job on staying committed to your health! Your dedication to
 following through with your care plan is truly commendable. Keep
 up the great work, and don't hesitate to reach out if you need any
 guidance moving forward!"
 </p>
 <h4>- Doctor Drizzy</h4>
 </div>
 </div>
 </div>
 </div>


 <div className="information-section">
 <div className="information-container">
 <button className="information">
 <div className="information-content">
 <img src={doctorIcon} alt="Doctor Icon" className="logo-information" />
 <div>
 <div className="information-title">Contact your doctors directly</div>
 <div className="information-subtitle">
 Get fast help from your previous doctors
 </div>
 </div>
 <div className="arrow">
      <ArrowContent width="25" height="14" color="black" /> 
    </div>
 </div>
 </button>
 <button className="information">
 <div className="information-content">
 <img
 src={prescriptionIcon}
 alt="Prescription Icon"
 className="logo-information"
 />
 <div>
 <div className="information-title">Renew your prescriptions</div>
 <div className="information-subtitle">
 Get your perscriptions simply within 30 minutes
 </div>
 </div>
 <div className="arrow">
      <ArrowContent width="25" height="14" color="black" /> 
    </div>
 </div>
 </button>
 <button className="information">
 <div className="information-content">
 <img src={healioIcon} alt="Healio Icon" className="logo-information" />
 <div>
 <div className="information-title">Register with Healio.com</div>
 <div className="information-subtitle">
 Choose a healthcare center near you
 </div>
 </div>
 <div className="arrow">
      <ArrowContent width="25" height="14" color="black" /> 
    </div>
 </div>
 </button>
 <button className="information">
 <div className="information-content">
 <img
 src={specialistIcon}
 alt="Specialist Icon"
 className="logo-information"
 />
 <div>
 <div className="information-title">Get help from specialists</div>
 <div className="information-subtitle">Get fast help from your specialists</div>
 </div>
 <div className="arrow">
      <ArrowContent width="25" height="14" color="black" /> 
    </div>
 </div>
 </button>
 </div>
 
 </div>
    </div>
  );
}
