import React from 'react';
import '../styles/certificates.css';

// Importación de todas las imágenes
import imgOmaped from '../assets/certificados/OMAPED.jpg';
import imgCiscoRedes from '../assets/certificados/CCNA Redes Empresariales, Seguridad y Automatización.jpg';
import imgCiscoCCNA from '../assets/certificados/CCNAv7 Switching, Routing, and Wireless Essentials.jpg';
import imgCiberseguridad from '../assets/certificados/Introducción a la Ciberseguridad.jpg';
import imgCienciaDatos from '../assets/certificados/Introducción a la Ciencia de Datos.jpg';
import imgIA from '../assets/certificados/Introducción a la IA moderna.jpg';
import imgOS from '../assets/certificados/Operating Systems Basics.jpg';
import imgMoviles from '../assets/certificados/Uso de Computadoras y Dispositivos Móviles.jpg';
import imgPronatelInter from '../assets/certificados/PRONATEL OFFICE-NIVEL INTERMEDIO.jpg';
import imgPronatelBasico from '../assets/certificados/PRONATEL OFFICE- NIVEL BASICO.jpg';

const certificates = [
  { title: "Prácticas Pre-Profesionales", school: "OMAPED", image: imgOmaped },
  { title: "CCNA: Redes Empresariales, Seg. y Auto.", school: "Cisco Networking Academy", image: imgCiscoRedes },
  { title: "CCNAv7: Switching, Routing & Wireless", school: "Cisco Networking Academy", image: imgCiscoCCNA },
  { title: "Introducción a la Ciberseguridad", school: "Cisco Networking Academy", image: imgCiberseguridad },
  { title: "Introducción a la Ciencia de Datos", school: "Cisco Networking Academy", image: imgCienciaDatos },
  { title: "Introducción a la IA Moderna", school: "Cisco Networking Academy", image: imgIA },
  { title: "Operating Systems Basics", school: "Cisco Networking Academy", image: imgOS },
  { title: "Computadoras y Disp. Móviles", school: "Cisco Networking Academy", image: imgMoviles },
  { title: "Office - Nivel Intermedio", school: "PRONATEL", image: imgPronatelInter },
  { title: "Office - Nivel Básico", school: "PRONATEL", image: imgPronatelBasico }
];

function Certificates() {
  return (
    <section className="certificates" id="certificados">
      <p className="sectionTitle">CERTIFICADOS</p>
      <h2>Cursos y certificaciones</h2>

      <div className="certificateGrid">
        {certificates.map((item, index) => (
          /* Enlace directo para abrir la imagen en la misma pestaña */
          <a 
            href={item.image} 
            className="certificate-link" 
            key={index}
          >
            <div className="certificate">
              <div className="certificateImage">
                <img src={item.image} alt={`Certificado de ${item.title}`} />
              </div>
              <h3 translate="no">{item.title}</h3>
              <p>{item.school}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;