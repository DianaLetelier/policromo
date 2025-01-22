// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-icons">
        <div className="circle" style={{ backgroundColor: 'orange' }}></div>
        <div className="circle" style={{ backgroundColor: 'yellow' }}></div>
        <div className="circle" style={{ backgroundColor: 'lime' }}></div>
        <div className="circle" style={{ backgroundColor: 'aqua' }}></div>
        <div className="circle" style={{ backgroundColor: 'blue' }}></div>
      </div>

      <div className="header-content">
        <h1 className="header-title">
          <span className="poli">POLI</span>
          <span className="cromo">CROMO</span>
        </h1>

        <nav className="header-nav">
          <a href="#all-genres">Géneros</a>
          <a href="#interviews">Entrevistas</a>
          <a href="#socials">Redes Sociales</a>
          <a href="#events">Eventos</a>
        </nav>
      </div>

      <div className="header-right">
        <button>Contáctanos</button>
      </div>
    </header>
  );
};

export default Header;














