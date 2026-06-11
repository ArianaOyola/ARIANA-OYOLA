import React from 'react';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/javascript.png';
import reactLogo from '../assets/logos/react.png';
import nodeLogo from '../assets/logos/nodejs.png';
import typescriptLogo from '../assets/logos/typescript.png'; 
import figmaLogo from '../assets/logos/figma.png';
import sqlLogo from '../assets/logos/sql.png';
import pythonLogo from '../assets/logos/python.png';
import notionLogo from '../assets/logos/notion.png';

import '../styles/skills.css';

const misHabilidades = [
  { nombre: 'HTML', logo: htmlLogo },
  { nombre: 'CSS', logo: cssLogo },
  { nombre: 'JavaScript', logo: jsLogo },
  { nombre: 'React', logo: reactLogo },
  { nombre: 'Node.js', logo: nodeLogo },
  { nombre: 'TypeScript', logo: typescriptLogo },
  { nombre: 'Figma', logo: figmaLogo },
  { nombre: 'SQL', logo: sqlLogo },
  { nombre: 'Python', logo: pythonLogo },
  { nombre: 'Notion', logo: notionLogo },
];

const Skills = () => {
  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas que domino.</p>

        <div className="skills-grid">
          {misHabilidades.map((habilidad, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <img src={habilidad.logo} alt={`Logo de ${habilidad.nombre}`} />
              </div>
              {/* El atributo translate="no" evita traducciones automáticas del navegador */}
              <p className="skill-name" translate="no">{habilidad.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;