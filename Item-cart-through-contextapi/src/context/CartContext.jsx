/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const CartKaContext = createContext(null);

export const useCart = () => {
    const cart = useContext(CartKaContext);
    return cart;
}

export const CartProvider = (props) => {

    const [items, setItems ] = useState([]);
    
    
    return (
        <CartKaContext.Provider value={{items, setItems}}>
            {props.children}
        </CartKaContext.Provider>
    )
}