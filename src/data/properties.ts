// src/data/properties.ts

export interface Property {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
  }
  
  export const properties: Property[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400',
      title: 'Apartamento Moderno',
      description: 'Imóvel localizado no centro, com 2 quartos e varanda.',
      price: 'R$ 500.000',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400',
      title: 'Casa de Campo',
      description: 'Casa ampla com jardim, 3 quartos e área de lazer.',
      price: 'R$ 750.000',
    },
    // Adicione mais imóveis se necessário
  ];
  