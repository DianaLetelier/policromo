import React from 'react';

const genres = [
  { name: 'Metal', color: 'linear-gradient(to bottom, #1e1e1e, #4e4e4e)', image: 'metal.jpg' },
  { name: 'Pop', color: 'linear-gradient(to bottom, #ff004c, #ff7a7a)', image: 'pop.jpg' },
  { name: 'Rock', color: 'linear-gradient(to bottom, #ba4e00, #ff9900)', image: 'rock.jpg' },
  { name: 'Punk', color: 'linear-gradient(to bottom, #5a0e00, #ff2600)', image: 'punk.jpg' },
  { name: 'Indie', color: 'linear-gradient(to bottom, #004d40, #26a69a)', image: 'indie.jpg' },
  { name: 'Electronic', color: 'linear-gradient(to bottom, #3b00b2, #8e24aa)', image: 'electronic.jpg' }
];

const GenreSections = () => (
  <div className="genres">
    {genres.map((genre) => (
      <div
        key={genre.name}
        className="genre-section"
        style={{ background: genre.color }}
      >
        <img src={`./images/${genre.image}`} alt={genre.name} />
        <h2>{genre.name}</h2>
      </div>
    ))}
  </div>
);

export default GenreSections;
