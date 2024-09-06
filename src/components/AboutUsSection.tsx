// src/components/AboutUsSection.tsx
import React from 'react';
import '../styles/AboutUsSection.css'; // Specific styles for this section
import TeamMemberCard from './TeamMemberCard';

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          We are a real estate agency focused on offering a unique and personalized experience to all of our clients. With years of experience in the market, we believe that every property tells a story, and we are here to help you find the home of your dreams.
        </p>

        <div className="about-us-values">
          <h3 className="about-us-subtitle">Our Values</h3>
          <p className="about-us-values-text">
            Commitment, transparency, and trust are the pillars that sustain our work in the real estate market.
          </p>
        </div>
      </div>

      {/* Section to display team members */}
      <div className="team-members">
        <h3 className="about-us-subtitle">Our Team</h3>
        <div className="team-members-grid">
          {/* Example of team members */}
          <TeamMemberCard
            name="John Silva"
            role="Real Estate Agent"
            image="https://via.placeholder.com/150"
          />
          <TeamMemberCard
            name="Maria Oliveira"
            role="Consultant"
            image="https://via.placeholder.com/150"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
