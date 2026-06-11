import React from 'react';
// IMPORTA TUS LOGOS AQUÍ. (Corregido a 2 puntos ../)
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/javascript.png';
import reactLogo from '../assets/logos/react.png';
import nodeLogo from '../assets/logos/nodejs.png';
import typescriptLogo from '../assets/logos/typesript.png'; 
import figmaLogo from '../assets/logos/figma.png';
import sqlLogo from '../assets/logos/sql.png';
import pythonLogo from '../assets/logos/python.png';
import notionLogo from '../assets/logos/notion.png';
// Importa tu nuevo archivo CSS
import '../styles/skills.css';

// 1. DEFINE TU LISTA DE HABILIDADES CON SUS LOGOS
const misHabilidades = [
  { nombre: 'HTML', logo: htmlLogo },
  { nombre: 'CSS', logo: cssLogo },
  { nombre: 'JavaScript', logo: jsLogo },
  { nombre: 'React', logo: reactLogo },
  { nombre: 'Node.js', logo: nodeLogo },
  { nombre: 'TypeScript', logo: typescriptLogo }, // <- Corregido: usamos la variable correcta y escribimos bien el nombre
  { nombre: 'Figma', logo: figmaLogo },
  { nombre: 'SQL', logo: sqlLogo },
  { nombre: 'Python', logo: pythonLogo }, // <- Corregido: mayúscula y sin espacios extra
  { nombre: 'Notion', logo: notionLogo }, // <- Corregido: mayúscula y sin espacios extra
];

const Skills = () => {
  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas que domino.</p>

        {/* 2. CREA LA CUADRÍCULA DE LOGOS */}
        <div className="skills-grid">
          {misHabilidades.map((habilidad, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">
                <img src={habilidad.logo} alt={`Logo de ${habilidad.nombre}`} />
              </div>
              <p className="skill-name">{habilidad.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;