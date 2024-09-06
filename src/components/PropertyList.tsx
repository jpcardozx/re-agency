// src/components/PropertyList.tsx
import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';
import './PropertyList.css';

const PropertyList: React.FC = () => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
