import React from 'react';
import '../styles/Footer.css'; // Ruta corregida

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Policromo. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

