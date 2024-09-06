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
            image="https://github.com/jpcardozx/re-agency/blob/main/src/assets/DALL%C2%B7E%202024-09-06%2015.34.08%20-%20A%20professional%20corporate%20headshot%20of%20a%20middle-aged%20man%20named%20John%20Smith.%20He%20has%20light%20skin,%20short,%20neatly%20styled%20brown%20hair,%20and%20a%20well-groomed%20beard.png?raw=true"
          />
          <TeamMemberCard
            name="Sarah Johnson"
            role="Consultant"
            image="https://github.com/jpcardozx/re-agency/blob/main/src/assets/7dbc85d9-0f85-49cd-8619-5eddd50e37f5.png?raw=true"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
