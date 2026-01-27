import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCartContext();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = useCallback(() => {
    setOrderPlaced(true);
    clearCart();
  }, [clearCart]);

  const handleContinueShopping = useCallback(() => {
    navigate('/products');
  }, [navigate]);

  const orderTotal = useMemo(() => {
    return (totalPrice * 1.1).toFixed(2);
  }, [totalPrice]);

  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>🎉 Pesanan Berhasil Dibuat!</h2>
        <p>Terima kasih telah berbelanja</p>
        <button onClick={handleContinueShopping} className="btn-primary">
          Lanjutkan Belanja
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="checkout-section">
          <h2>Ringkasan Pesanan</h2>
          
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-info">
                  <span>{item.title}</span>
                  <span>x {item.quantity}</span>
                </div>
                <span className="order-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Pengiriman</span>
              <span>Gratis</span>
            </div>
            <div className="total-row">
              <span>Pajak (10%)</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>${orderTotal}</span>
            </div>
          </div>
        </div>
        
        <div className="checkout-section">
          <h2>Informasi Pengiriman</h2>
          <p><strong>Nama:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p>Alamat pengiriman akan diminta saat pembayaran</p>
        </div>
        
        <button onClick={handleOrder} className="place-order-btn">
          Buat Pesanan
        </button>
      </div>
    </div>
  );
};

export default Checkout;