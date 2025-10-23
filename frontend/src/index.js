// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // ✅ added

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>   {/* ✅ Wrap the entire app */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
