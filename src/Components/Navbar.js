
import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import logo from '../image/logo.svg'; 
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Toggle function to open/close the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? "expanded" : ""}`}>
      <div className="nav-left">
        <img 
          src={logo} 
          alt="Logo" 
          className="nav-logo" 
          onClick={toggleNav} 
        />

        {/* Show the nav links only if the menu is open */}
        {isNavOpen && (
          <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>Home</Link>
            <Link to="/profile" className="nav-link" onClick={() => setIsNavOpen(false)}>Profile</Link>
            <Link to="/prescriptions" className="nav-link" onClick={() => setIsNavOpen(false)}>Language</Link>
          </div>
        )}
      </div>

      <div className="nav-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <FaMicrophone className="mic-icon" />
        </div>
        <Link to="/login">
        <button className="login-btn">
          Log In
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
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
