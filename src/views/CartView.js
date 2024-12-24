import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    
    const { cart, cartLenght } = useContext(CartContext);

    return(
        <div>
            <h1>Shopping Cart</h1>
            <p> Total items: {cartLenght}</p>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartView;