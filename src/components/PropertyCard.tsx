// src/components/PropertyCard.tsx
import React from 'react';
import './PropertyCard.css';

interface PropertyCardProps {
  property: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { image, title, description, price } = property;

  return (
    <div className="property-card">
      <img src={image} alt={title} className="property-image" />
      <div className="property-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <button className="cta-button">Agendar Visita</button>
      </div>
    </div>
  );
};

export default PropertyCard;
