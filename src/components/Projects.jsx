import React from 'react';
import '../styles/projects.css';

const projects = [
  { 
    title: "Sistema Netzum", 
    description: "Sistema de gestión de cursos y revisores desarrollado en Python con Flask.", 
    tags: ["Python", "Flask", "SQL"], 
    link: "https://github.com/ArianaOyola/sistema-netzum" 
  },
  { 
    title: "APK RIST", 
    description: "Aplicación de reconocimiento con base de datos y procesamiento en Python.", 
    tags: ["Python", "OpenCV", "SQLite"], 
    link: "https://github.com/ArianaOyola/apk-rist" 
  },
  { 
    title: "Colegio San Sebastián", 
    description: "Plataforma web educativa desarrollada con React y TypeScript.", 
    tags: ["React", "TypeScript", "Tailwind"], 
    link: "https://github.com/ArianaOyola/colegio-san-sebastian" 
  },
  { 
    title: "Sistema de Botica KMK", 
    description: "Sistema integral de gestión para boticas, incluyendo ventas e inventario.", 
    tags: ["PHP", "MySQL", "CSS"], 
    link: "https://github.com/ArianaOyola/sistema-de-botica_kmk" 
  },
  { 
    title: "Sistema OMAPED", 
    description: "Plataforma para la gestión de beneficiarios con control de acceso.", 
    tags: ["PHP", "JavaScript", "MySQL"], 
    link: "https://github.com/ArianaOyola/sistema_omaped" 
  },
  { 
    title: "Heladería Ariana", 
    description: "Sistema de ventas de escritorio desarrollado en Java con Swing.", 
    tags: ["Java", "Swing", "MySQL"], 
    link: "https://github.com/ArianaOyola/sistema-de-heladeria-ariana_oyola-" 
  }
];

function Projects() {
  return (
    <section className="projects-container" id="proyectos">
      <h2 className="main-title">Proyectos destacados</h2>
      <div className="showcase-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-repo">
              Ver Repositorio
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;