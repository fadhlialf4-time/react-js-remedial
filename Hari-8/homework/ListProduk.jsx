// Nomor 5
function ListProduk() {
  const produk = [];

  if (produk.length === 0) {
    return <p>Produk belum tersedia</p>;
  }

  return (
    <ul>
      {produk.map((produk) => (
        <li key={produk.id}>{produk.name}</li>
      ))}
    </ul>
  );
}

export default ListProduk