import React from 'react';
import '/src/styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-card">
          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-line">Find Your Perfect Home With CDMP RealEstate</span>
          </h1>
          <p className="hero-description">
            Your dream home is closer than you think. Whether you’re looking for a stylish city apartment or a peaceful family house, CDMP RealEstate offers the best properties tailored to your needs. Let us help you make the right move with confidence.
          </p>
          <button className="cta-button" role="button">
            Browse Our Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
