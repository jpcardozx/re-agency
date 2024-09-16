import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '/src/styles/Footer.css';

const Footer: React.FC = () => {
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/white-logo.png?raw=true" alt="Your Company Logo" />
    </div>
    <div className="footer-text">
      <h2 className="footer-title">Your Company Name</h2>
      <p className="footer-description">A brief description or tagline about your company or services.</p>
    </div>
    <div className="footer-cta">
      <button className="get-in-touch-btn">Get in Touch</button>
    </div>
  </div>
</footer>
  );
}

export default Footer;
