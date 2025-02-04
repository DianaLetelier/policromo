import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="header-nav">
      <a onClick={() => handleScroll('#generos')}>Géneros</a>
      <a onClick={() => handleScroll('#interviews')}>Entrevistas</a>
      <a onClick={() => handleScroll('#social')}>Redes Sociales</a>
      <a onClick={() => handleScroll('#events')}>Eventos</a>
    </nav>
  );
};

export default Navigation;



