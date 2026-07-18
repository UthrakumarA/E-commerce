import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CardContext';
import AppRouter from './AppRouter';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";
import './CSS/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRouter />
            <Toaster position="top-center" reverseOrder={false}
            toastOptions={{ duration: 3000,
              style: {background: "black",color: "#00f5d4",border: "1px solid #FFFFFF",
              borderRadius: "10px",padding: "12px 16px",fontWeight: "500",}}}/>
          </CartProvider>
        </WishlistProvider> 
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
