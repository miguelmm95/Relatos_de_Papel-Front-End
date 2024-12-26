import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const CartView = () => {
    
    const navigate = useNavigate();
    const { cart, cartLenght } = useContext(CartContext);
    const { getTotalPrice } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { addItem } = useContext(CartContext);

    const handleNavigate = () => {
        navigate("/Checkout");
    };

    const handleRemoveItem = (id) =>{
        removeItem(id);
    };

    const handleAddItem = (id) =>{
        addItem(id);
    };

    return(
        <div className="cart_container">
            <h1 className="cart_title">Shopping Cart</h1>
            <p className="cart_text"> Total items: {cartLenght}</p>
            <ul className="cart_list">
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.amount}
                        <button className="cart_button" onClick={() => handleAddItem(item.id)}>+</button>
                        <button className="cart_button" onClick={() => handleRemoveItem(item.id)}>-</button>
                    </li>
                ))}
            </ul>
            <p className="cart_total">Total: {getTotalPrice()}€</p>
            <button className="cart_checkout_button" onClick={handleNavigate} disabled={cart.length === 0}>Go to checkout</button>
        </div>
    );
};

export default CartView;