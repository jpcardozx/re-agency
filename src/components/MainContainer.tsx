// src/components/MainContainer.tsx
import React from 'react';
import PropertyList from './PropertyList';
import './MainContainer.css';

const MainContainer: React.FC = () => {
  return (
    <section className="main-container">
      <h2 className="section-title">Destaques de Imóveis</h2>
      <PropertyList />
    </section>
  );
};

export default MainContainer;
