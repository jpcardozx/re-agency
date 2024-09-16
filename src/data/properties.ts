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
      title: 'Modern Suburban Oasis',
      description: 'Sleek 3-bedroom, 2.5-bathroom home in a family-friendly neighborhood. Features an open-concept kitchen with quartz countertops, a spacious master suite with walk-in closet, and a beautifully landscaped backyard with a patio perfect for entertaining. Energy-efficient appliances and smart home technology throughout.',
      price: 'USD 275.000',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400',
      title: 'Historic Downtown Townhouse',
      description: 'Lovingly restored 19th-century townhouse in the heart of the city. This 2-bedroom, 2-bathroom gem boasts original architectural details, high ceilings, and hardwood floors. Updated kitchen and bathrooms blend modern convenience with classic charm. Rooftop terrace offers stunning skyline views.',
      price: 'USD 315.000',
    },
    // Adicione mais imóveis se necessário
  ];
  