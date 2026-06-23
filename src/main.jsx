import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/Cardcontext';
import AppRouter from './AppRouter';
import './CSS/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
       <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
