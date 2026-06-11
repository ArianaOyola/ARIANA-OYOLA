import React from 'react';
import '../styles/certificates.css';

import imgOmaped from '../assets/certificados/OMAPED.jpg';

const certificates = [
  {
    title: "Prácticas Pre-Profesionales",
    school: "OMAPED",
    image: "ruta_imagen_omaped" 
  },
  {
    title: "CCNA: Redes Empresariales, Seg. y Auto.",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco1"
  },
  {
    title: "CCNAv7: Switching, Routing & Wireless",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco2"
  },
  {
    title: "Introducción a la Ciberseguridad",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco3"
  },
  {
    title: "Introducción a la Ciencia de Datos",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco4"
  },
  {
    title: "Introducción a la IA Moderna",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco5"
  },
  {
    title: "Operating Systems Basics",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco6"
  },
  {
    title: "Computadoras y Disp. Móviles",
    school: "Cisco Networking Academy",
    image: "ruta_imagen_cisco7"
  },
  {
    title: "Office - Nivel Intermedio",
    school: "PRONATEL",
    image: "ruta_imagen_pronatel1"
  },
  {
    title: "Office - Nivel Básico",
    school: "PRONATEL",
    image: "ruta_imagen_pronatel2"
  }
];

function Certificates() {
  return (
    <section className="certificates" id="certificados">
      <p className="sectionTitle">CERTIFICADOS</p>
      <h2>Cursos y certificaciones</h2>

      <div className="certificateGrid">
        {certificates.map((item, index) => (
          <div className="certificate" key={index}>
            <div className="certificateImage">
              {/* Insertamos la imagen en lugar del emoji */}
              <img src={item.image} alt={`Certificado de ${item.title}`} />
            </div>
            <h3 translate="no">{item.title}</h3>
            <p>{item.school}</p>
            {/* Se eliminó el botón de "Ver certificado" */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;