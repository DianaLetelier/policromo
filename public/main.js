// src/main.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Punto de entrada principal de tu aplicación
import "./styles/main.css"; // Estilo principal de tu proyecto

// Crear un contenedor raíz en el DOM
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Renderizar la aplicación principal
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
