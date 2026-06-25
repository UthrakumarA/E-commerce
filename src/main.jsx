import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/Cardcontext';
import AppRouter from './AppRouter';
import { Toaster } from "react-hot-toast";
import './CSS/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
       <CartProvider>
        <AppRouter />
        <Toaster position="top-center" reverseOrder={false}
        toastOptions={{ duration: 4000,
          style: {background: "black",color: "#00f5d4",border: "1px solid #FFFFFF"},}}/>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
