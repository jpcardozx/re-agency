// src/components/TeamMemberCard.tsx
import React from 'react';
import '../styles/TeamMemberCard.css'; // Estilos específicos do cartão

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} className="team-member-image" />
      <h4 className="team-member-name">{name}</h4>
      <p className="team-member-role">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
