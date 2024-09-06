import React from 'react';
import '/src/styles/SkillsSection.css';

const skills = [
  { name: 'React', imageUrl: '/path/to/react-icon.svg', description: 'Building dynamic and scalable UIs.' },
  { name: 'TypeScript', imageUrl: 'https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=000000' },
  { name: 'JavaScript', imageUrl: '/path/to/javascript-icon.svg', description: 'Fundamental language for web development.' },
  { name: 'Node.js', imageUrl: '/path/to/nodejs-icon.svg', description: 'Server-side JavaScript for building APIs.' },
  { name: 'CSS', imageUrl: '/path/to/css-icon.svg', description: 'Styling web pages with responsive design.' },
  { name: 'Git', imageUrl: '/path/to/git-icon.svg', description: 'Version control and collaborative development.' },
  { name: 'Vite', imageUrl: '/path/to/vite-icon.svg', description: 'Fast build tool for modern front-end development.' },
  // Adicione mais skills conforme necessário
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-content">
                <img src={skill.imageUrl} alt={skill.name} className="skill-icon" />
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
