// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Home from './components/Home';

// Creación del root usando React 18.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

