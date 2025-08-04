import React, { useContext } from "react";
import { CartKaContext } from "../context/CartContext";

const Item = (props) => {
  const cartItems = useContext(CartKaContext);
  // console.log(cartItems);

  return (
    <div>
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      <button
        onClick={() =>
          cartItems.setItems([
            ...cartItems.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
