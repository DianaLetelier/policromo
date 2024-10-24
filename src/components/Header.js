import React from 'react';
import './Header.css'; // Importamos los estilos específicos

const Header = () => (
  <header className="header">
    {/* Puntos de colores en horizontal */}
    <div className="header-icons">
      <div className="circle" style={{ backgroundColor: '#FF8C00' }}></div> {/* Naranja */}
      <div className="circle" style={{ backgroundColor: '#FFD700' }}></div> {/* Amarillo Claro */}
      <div className="circle" style={{ backgroundColor: '#FFFF00' }}></div> {/* Amarillo */}
      <div className="circle" style={{ backgroundColor: '#32CD32' }}></div> {/* Verde */}
      <div className="circle" style={{ backgroundColor: '#1E90FF' }}></div> {/* Azul */}
    </div>

    {/* Título centrado */}
    <h1 className="header-title">
      <span className="poli">POLI</span>
      <span className="cromo">CROMO</span>
    </h1>

    {/* Navegación y opciones */}
    <div className="header-right">
      <nav className="header-nav">
        <a href="#">Géneros</a>
        <a href="#">Entrevistas</a>
        <a href="#">Redes Sociales</a>
        <a href="#">Eventos</a>
      </nav>
      <div className="header-options">
        <button>Contáctanos</button>
      </div>
    </div>
  </header>
);

export default Header;








