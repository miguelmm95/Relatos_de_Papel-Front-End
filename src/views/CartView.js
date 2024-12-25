import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    
    const { cart, cartLenght } = useContext(CartContext);
    const { getTotalPrice } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { addItem } = useContext(CartContext);

    const handleRemoveItem = (id) =>{
        removeItem(id);
    };

    const handleAddItem = (id) =>{
        addItem(id);
    };

    return(
        <div>
            <h1>Shopping Cart</h1>
            <p> Total items: {cartLenght}</p>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.amount}
                        <button onClick={() => handleAddItem(item.id)}>+</button>
                        <button onClick={() => handleRemoveItem(item.id)}>-</button>
                    </li>
                ))}
            </ul>
            <p>Total: {getTotalPrice()}€</p>
        </div>
    );
};

export default CartView;