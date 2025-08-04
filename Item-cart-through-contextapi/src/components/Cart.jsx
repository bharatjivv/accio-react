import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();
  // console.log(cart);
  const total = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              {item.name} - {item.price}
            </li>
          );
        })}

      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;
