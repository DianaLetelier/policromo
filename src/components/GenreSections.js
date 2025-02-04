import React from 'react';
import '../styles/GenreSections.css'; // Ruta corregida

const GenreSections = () => {
  return (
    <div id="generos" className="genres-container">
      <div className="genre metal">
        <div className="genre-content">
          <div className="genre-icon skull"></div>
          <h3>METAL</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
      <div className="genre rock">
        <div className="genre-content">
          <div className="genre-icon band"></div>
          <h3>ROCK</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
      <div className="genre pop">
        <div className="genre-content">
          <div className="genre-icon microphone"></div>
          <h3>POP</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
      <div className="genre punk">
        <div className="genre-content">
          <div className="genre-icon punk-icon"></div>
          <h3>PUNK</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
      <div className="genre indie">
        <div className="genre-content">
          <div className="genre-icon guitar"></div>
          <h3>INDIE</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
      <div className="genre electronic">
        <div className="genre-content">
          <div className="genre-icon electronic-icon"></div>
          <h3>ELECTRONIC</h3>
          <div className="genre-lines"></div>
        </div>
      </div>
    </div>
  );
};

export default GenreSections;
