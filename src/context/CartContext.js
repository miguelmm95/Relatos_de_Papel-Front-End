import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            { children }
        </CartContext.Provider>
    );
};
