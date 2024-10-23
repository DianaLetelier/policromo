import React from 'react';

const Navigation = () => (
  <nav className="navigation">
    {['Metal', 'Pop', 'Rock', 'Punk', 'Indie', 'Electronic'].map((genre) => (
      <div key={genre} className="nav-item">
        {genre}
      </div>
    ))}
  </nav>
);

export default Navigation;
