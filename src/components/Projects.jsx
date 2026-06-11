import React from 'react';
import '../styles/projects.css';

const projects = [
  { title: "Portafolio Web Personal", description: "Portafolio profesional en React.", tags: ["React", "CSS", "Vite"], link: "#" },
  { title: "Gestión de Inventarios", description: "Control de stock en tiempo real.", tags: ["Node.js", "SQL", "Express"], link: "#" },
  { title: "Dashboard de IA", description: "Interfaz para visualizar modelos IA.", tags: ["React", "TypeScript"], link: "#" },
  { title: "Sistema de Citas", description: "Gestión médica web.", tags: ["PHP", "MySQL"], link: "#" }
];

function Projects() {
  return (
    <section className="projects-container" id="proyectos">
      <h2 className="main-title">Proyectos destacados</h2>
      <div className="showcase-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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