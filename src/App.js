// src/App.js
import React from 'react';
import Header from './components/Header';
import GenreSections from './components/GenreSections';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <Header />

      <GenreSections />

      {/* Sección para Entrevistas */}
      <section id="interviews" className="section interviews">
        <h2>Entrevistas</h2>
        <p>Contenido de entrevistas aquí...</p>
      </section>

      {/* Sección para Todos los Géneros */}
      <section id="all-genres" className="section all-genres">
        <h2>Todos los Géneros</h2>
        <p>Contenido de todos los géneros aquí...</p>
      </section>

      {/* Sección para Redes Sociales */}
      <section id="socials" className="section socials">
        <h2>Redes Sociales</h2>
        <p>Contenido de redes sociales aquí...</p>
      </section>

      {/* Sección para Eventos */}
      <section id="events" className="section events">
        <h2>Eventos</h2>
        <p>Contenido de eventos aquí...</p>
      </section>

      <Footer />
    </div>
  );
};

export default App;








