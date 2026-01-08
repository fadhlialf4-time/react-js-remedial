// Nomor 2
function DiscountPrice() {
  const price = 100000;
  const discount = 0.2;

  const finalPrice = price - price * discount;

  function greet(name) {
    return `Halo, ${name}!`;
  }

  return (
    <div>
      <p>{greet('Fadhli')}</p>
      <p>Harga awal: Rp{price}</p>
      <p>Harga setelah diskon: Rp{finalPrice}</p>
    </div>
  );
}

export default DiscountPrice