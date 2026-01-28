import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartDisplay() {
  const { cart, removeItem, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: {totalPrice}</p>
    </div>
  );
}

export default CartDisplay;
