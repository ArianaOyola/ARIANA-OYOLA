import React, { useState } from 'react';

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src="/Logo.png" alt="Ariana Oyola" />
      </div>
      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`navContainer ${menuOpen ? "open" : ""}`}>
        <ul onClick={() => setMenuOpen(false)}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#certificados">Certificados</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          {/* AQUÍ ESTÁ EL ENLACE FALTANTE */}
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        
        <button className="themeBtn" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;