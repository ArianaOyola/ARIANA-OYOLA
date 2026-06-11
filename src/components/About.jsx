import React from 'react';
import '../styles/about.css';
import fotoSobreMi from '../assets/sobre-mi.jpg'; // 1. Corregido el nombre a tu archivo real FOTO.jpg

function About(){
  return(
    <section className="about" id="sobre">
      
      <div className="aboutImage">
        {/* 2. Reemplazamos el emoji 🩷 por la etiqueta img usando la variable */}
        <img src={fotoSobreMi} alt="Ariana Oyola" />
      </div>

      <div className="aboutText">
        <p className="sectionTitle">SOBRE MÍ</p>
        <h2>Apasionada por crear soluciones digitales</h2>
        
        <p>
          Soy estudiante de Ingeniería de Sistemas cursando el noveno ciclo.
          <br /><br />
          Me enfoco en construir experiencias digitales modernas y funcionales.
        </p>

        <div className="cards">
          <div className="card">
            💻
            <h4>Desarrollo Web</h4>
            <p>Aplicaciones funcionales.</p>
          </div>

          <div className="card">
            🎨
            <h4>Diseño UI/UX</h4>
            <p>Interfaces atractivas.</p>
          </div>

          <div className="card">
            🧠
            <h4>Pensamiento Analítico</h4>
            <p>Resolución de problemas.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;