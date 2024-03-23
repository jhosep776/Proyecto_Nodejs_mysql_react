import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importar los estilos de los iconos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

