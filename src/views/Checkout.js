import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

export const Checkout = () => {

    const navigate = useNavigate();
    const { cart, getTotalPrice, emptyCart } = useContext(CartContext);

    const handleCheckout = () => {
        alert(`Your total price is ${getTotalPrice()}€. Thank you for your purchase!`);
        emptyCart();
        navigate("/books");
    };

    return (
        <div className="checkout_container">
            <h1 className="checkout_title">Checkout</h1>
            <ul className="checkout_list">
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.amount}
                    </li>
                ))}
            </ul>
            <p className="checkout_total">Total: {getTotalPrice()}€</p>
            <button onClick={() => navigate("/Cart")}>Go back to cart</button>
            <button className="checkout_button" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};