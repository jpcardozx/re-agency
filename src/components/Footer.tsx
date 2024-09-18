import React from 'react';
import '/src/styles/Footer.css';

const Footer: React.FC = () => {
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="https://github.com/jpcardozx/react-portfolio-app/blob/main/src/assets/white-logo.png?raw=true" alt="Your Company Logo" />
    </div>
    <div className="footer-text">
      <h2 className="footer-title">Real Estate Agency | React + TS</h2>
      <p className="footer-description">Portfolio Project. This is a base template for Real Estate Agency Web App.</p>
    </div>
    <div className="footer-cta">
      <button className="get-in-touch-btn" href="https://jpcardozx.github.io/social-links-profile/">Get in Touch</button>
    </div>
  </div>
</footer>
  );
}

export default Footer;
