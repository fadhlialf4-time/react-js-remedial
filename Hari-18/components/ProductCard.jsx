import { memo } from 'react';

const ProductCard = memo(({ product, onAddToCart, onClick }) => {
  return (
    <div className="product-card">
      <div onClick={onClick} style={{ cursor: 'pointer' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
          loading="lazy"
        />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-category">{product.category}</p>
          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart();
        }}
        className="add-to-cart-btn"
      >
        Tambahkan ke Keranjang
      </button>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;