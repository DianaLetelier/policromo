import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Importación del CSS

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/metal">Metal</Link></li>
      <li><Link to="/pop">Pop</Link></li>
      <li><Link to="/rock">Rock</Link></li>
      <li><Link to="/punk">Punk</Link></li>
      <li><Link to="/indie">Indie</Link></li>
      <li><Link to="/electronica">Electrónica</Link></li>
      <li><Link to="/entrevistas">Entrevistas</Link></li>
    </ul>
  </nav>
);

export default Navigation;

