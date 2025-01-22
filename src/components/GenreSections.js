// src/components/GenreSections.js
import React from 'react';
import '../styles/GenreSections.css';

const genres = [
  { title: 'Metal', img: '/images/metal.png' },
  { title: 'Pop', img: '/images/pop.jpg' },
  { title: 'Rock', img: '/images/rock.jpg' },
  { title: 'Punk', img: '/images/punk.jpg' },
  { title: 'Indie', img: '/images/indie.jpg' },
  { title: 'Electronic', img: '/images/electronic.jpg' },
];

const GenreSections = () => (
  <section className="genres">
    {genres.map((genre, index) => (
      <div className="genre-section" key={index}>
        <div className="lines-overlay">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="line" />
          ))}
        </div>
        <img src={genre.img} alt={genre.title} />
        <h2>{genre.title}</h2>
      </div>
    ))}
  </section>
);

export default GenreSections;


