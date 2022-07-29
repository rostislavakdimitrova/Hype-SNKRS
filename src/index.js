import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Header />
      <App />
      <Footer />
      </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
