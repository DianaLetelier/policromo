import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Home from './components/Home';

console.log("Rendering React App...");

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
