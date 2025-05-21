import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 19
import App from './App';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);