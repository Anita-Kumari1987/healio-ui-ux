import React from 'react';
import '../styles/Footer.css'; // Add your custom CSS for Footer
import logof from '../image/logof.svg'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
 <div className="footer-container">
 <div className="footer-left">
 <h2 className="footer-heading">All of you, in one place</h2>
 <div className="email-signup">
 <input type="email" placeholder="email@gmail.com" className="email-input" />
 <button className="signup-button">Sign Up</button>
 </div>
 <div className="social-icons">
 <i className="fab fa-linkedin"></i>
 <i className="fab fa-instagram"></i>
 <i className="fab fa-x-twitter"></i>
 </div>
 </div>


 <div className="footer-links">
 <div className="footer-column">
 <h3>Find Work</h3>
 <a href="#">Explore jobs</a>
 <a href="#">Discover Companies</a>
 <a href="#">Browse Collections</a>
 </div>
 <div className="footer-column">
 <h3>Company</h3>
 <a href="#">Learn More</a>
 <a href="#">Sign Up</a>
 </div>
 <div className="footer-column">
 <h3>Find People</h3>
 <a href="#">About us</a>
 <a href="#">Careers</a>
 <a href="#">Contact</a>
 </div>
 </div>
 </div>
 
 <div className="footer-bottom">
  <div className="footer-logo-container">
    <h1 className="footer-logo">Healio</h1>
    <img src={logof} alt="Logo" className="footer-logo-icon" />
  </div>
  <div className="footer-accent"></div>
</div>
    </footer>
  );
};

export default Footer;
