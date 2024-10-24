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
      <GenreSections />
      <Footer />
    </div>
  );
};

export default App;


