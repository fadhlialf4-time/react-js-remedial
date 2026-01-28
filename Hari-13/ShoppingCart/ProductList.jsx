import { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
  { id: 1, name: "Baju Muslim", price: 150000 },
  { id: 2, name: "Hijab", price: 50000 },
];

function ProductList() {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
