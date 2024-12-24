import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const cartLength = cart.reduce((acc, item) => acc + item.amount, 0);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem => cartItem.id === item.id));
            if(existingItem){
                return prevCart.map(cartItem => {
                    if(cartItem.id === item.id){
                        return {...cartItem, amount: cartItem.amount + 1}
                    }else{
                        return cartItem
                    }
                });
            } else{
                return [...prevCart, {...item, amount: 1}];
            }
        });
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, cartLenght: cartLength }}>
            { children }
        </CartContext.Provider>
    );
};
