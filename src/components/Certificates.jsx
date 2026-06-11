import React, { useState } from 'react';
import '../styles/certificates.css';

// Importaciones de imágenes
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
  { title: "CCNA: Redes Empresariales", school: "Academia Cisco", image: imgCiscoRedes },
  { title: "CCNAv7: Switching & Routing", school: "Academia Cisco", image: imgCiscoCCNA },
  { title: "Intro. a la Ciberseguridad", school: "Academia Cisco", image: imgCiberseguridad },
  { title: "Intro. a la Ciencia de Datos", school: "Academia Cisco", image: imgCienciaDatos },
  { title: "Intro. a la IA Moderna", school: "Academia Cisco", image: imgIA },
  { title: "Operating Systems Basics", school: "Academia Cisco", image: imgOS },
  { title: "Computadoras y Móviles", school: "Academia Cisco", image: imgMoviles },
  { title: "Office - Nivel Intermedio", school: "PRONATEL", image: imgPronatelInter },
  { title: "Office - Nivel Básico", school: "PRONATEL", image: imgPronatelBasico }
];

function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <section className="certificates" id="certificados">
      {/* ¡AQUÍ ESTÁ EL TÍTULO QUE BORRÉ POR ERROR! */}
      <p className="sectionTitle">CERTIFICADOS</p>
      <h2 className="main-title">Cursos y certificaciones</h2>

      <div className="cert-grid">
        {certificates.map((item, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-info">
              <h3 translate="no">{item.title}</h3>
              <div className="tags">
                <span className="tag">{item.school}</span>
              </div>
            </div>

            <button className="btn-view-cert" onClick={() => openModal(item)}>
              Ver Certificado
            </button>
          </div>
        ))}
      </div>

      {/* Ventana Modal a pantalla completa */}
      {modalOpen && selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>✖</button>
          <img 
            src={selectedCert.image} 
            alt={selectedCert.title} 
            className="modal-image" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

export default Certificates;