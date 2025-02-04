import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import GenreSections from './components/GenreSections';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <GenreSections />
        <section id="interviews">
          <h2>Entrevistas</h2>
          <p>Contenido de entrevistas aquí...</p>
        </section>
        <section id="social">
          <h2>Redes Sociales</h2>
          <p>Contenido de redes sociales aquí...</p>
        </section>
        <section id="events">
          <h2>Eventos</h2>
          <p>Contenido de eventos aquí...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
