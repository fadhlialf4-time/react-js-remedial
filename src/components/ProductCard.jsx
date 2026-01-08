// Nomor 2
function ProductCard({productName, price, stock, isAvailable}) {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
            margin: '10px 0',
            width: '200px'
        }}>
            <h3>{productName}</h3>
            <p>Harga : Rp{price}</p>
            <p>Stok : {stock}</p>
            <p>Status : {isAvailable ? 'Tersedia' : 'Habis'}</p>
        </div>
    )
}

ProductCard.defaultProps = {
    productName: 'Produk Tanpa Nama',
    price: 0,
    stock: 0,
    isAvailable: true,
}

export default ProductCard