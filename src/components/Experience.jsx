import React from 'react';
import '../styles/experience.css';

const experience = [
  {
    year: "2021",
    month: "Septiembre",
    title: "Inicio en Ingeniería de Sistemas"
  },
  {
    year: "2024",
    month: "Julio - Diciembre",
    title: "Frutería"
  },
  {
    year: "2025",
    month: "Enero - Junio",
    title: "Ecotruly Park / Ecoyoga Village"
  },
  {
    year: "2025",
    month: "Julio - Septiembre",
    title: "Programa de Empleo Temporal - Llamkasun Perú"
  },
  {
    year: "2026",
    month: "Septiembre - Enero",
    title: "Ing. Web en el Area de OMAPED - Municipalidad de Aucallama"
  }
];

function Experience() {
  return (
    <section className="experience" id="experiencia">
      <h2 className="sectionTitle">EXPERIENCIA LABORAL</h2>
      <p>Se detalla la experiencia laboral obtenida en estos años</p>

      <div className="timeline">
        {experience.map((e, index) => (
          <div key={index} className="timeCard">
            <h3>{e.year}</h3>
            {/* AQUÍ ESTÁ EL MES AGREGADO */}
            <p className="month">{e.month}</p>
            <p className="jobTitle">{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;