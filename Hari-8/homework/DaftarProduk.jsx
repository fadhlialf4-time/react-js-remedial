// Nomor 4
function DaftarProduk() {
  const products = [
    { id: 1, name: "Beras" },
    { id: 2, name: "Telur" },
    { id: 3, name: "Gula" },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default DaftarProduk
