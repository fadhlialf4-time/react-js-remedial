import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">🛍️ ShopCart</a>
        </div>
        <div className="navbar-links">
          <a href="/products">Produk</a>
          <a href="/cart">Keranjang</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/checkout" 
                  element={
                    <PrivateRoute>
                      <Checkout />
                    </PrivateRoute>
                  } 
                />
              </Routes>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;