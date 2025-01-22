// src/components/Home.js
import React from 'react';
import Header from './Header';
import GenreSections from './GenreSections';
import Footer from './Footer';

const Home = () => (
  <div className="app">
    <Header />
    <div id="entrevistas" className="content-section">
      <h2>Entrevistas</h2>
      <p>Contenido de entrevistas...</p>
    </div>
    <div id="redes" className="content-section">
      <h2>Redes Sociales</h2>
      <p>Contenido de redes sociales...</p>
    </div>
    <div id="eventos" className="content-section">
      <h2>Eventos</h2>
      <p>Contenido de eventos...</p>
    </div>
    <GenreSections />
    <Footer />
  </div>
);

export default Home;
