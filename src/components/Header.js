import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <div className="circles">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
            <span className="circle blue"></span>
            <span className="circle purple"></span>
          </div>
          <h1 className="title">
            <span className="poli">POLI</span>
            <span className="cromo">CROMO</span>
          </h1>
        </div>
        <div className="header-right">
          <button className="contact-button">Contáctanos</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
