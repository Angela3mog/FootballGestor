import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import mongoose from 'mongoose'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Admin />
  </BrowserRouter>
);



reportWebVitals();
