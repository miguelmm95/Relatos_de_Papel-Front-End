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

    const getTotalPrice = () => {
        const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
        return total.toFixed(2);
    };

    const removeItem = (id) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem => cartItem.id === id));
            if(existingItem.amount === 1){
                return prevCart.filter(cartItem => cartItem.id !== id);
            }else{
                return prevCart.map(cartItem => {
                    if(cartItem.id === id){
                        return {...cartItem, amount: cartItem.amount - 1}
                    }else{
                        return cartItem
                    }
                });
            }
        });
    };

    const addItem = (id) => {
        setCart((prevCart) => {
            return prevCart.map(cartItem => {
                if(cartItem.id === id){
                    return {...cartItem, amount: cartItem.amount + 1}
                }else{
                    return cartItem
                }
            });
        })
    };

    return(
        <CartContext.Provider value={{ cart, addToCart, getTotalPrice, removeItem, addItem, cartLenght: cartLength }}>
            { children }
        </CartContext.Provider>
    );
};
