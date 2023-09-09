import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> Em produção não faz nada, mas em desenvolvimento ajuda a evitar problemas.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
