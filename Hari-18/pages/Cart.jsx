import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCartContext();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = useCallback(() => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleContinueShopping = useCallback(() => {
    navigate('/products');
  }, [navigate]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Keranjang anda kosong</h2>
        <p>Belum ada produk di keranjang anda. Silakan tambahkan produk terlebih dahulu</p>
        <button onClick={handleContinueShopping} className="btn-primary">
          Lihat produk
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Keranjang Belanja ({totalItems} items)</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Ringkasan Pesanan</h2>
          
          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Pengiriman</span>
            <span>Gratis</span>
          </div>
          
          <div className="summary-row">
            <span>Pajak</span>
            <span>${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>${(totalPrice * 1.1).toFixed(2)}</span>
          </div>
          
          <button onClick={handleCheckout} className="checkout-btn">
            {isAuthenticated ? 'Lanjutkan ke Checkout' : 'Login untuk Checkout'}
          </button>
          
          <button onClick={clearCart} className="clear-cart-btn">
            Hapus Semua Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;