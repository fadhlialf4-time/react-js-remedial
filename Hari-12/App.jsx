import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
          <div className="App">
            <Home />
          </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;