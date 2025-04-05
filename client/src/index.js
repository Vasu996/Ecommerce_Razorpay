import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext'; // ✅ Make sure your context export matches this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* ✅ Properly named and wrapped */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
