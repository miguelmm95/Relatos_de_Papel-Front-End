import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/BookCard.css";

export const Book = ({id, title, author, img, score, price }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    const handleClick = () => {
        navigate(`/books/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation()
        addToCart({id, title, img, price})
    };

    return (
        <div className="book_card" onClick={handleClick}>
            <img src={img} alt={title}/>
            <div className="book_card_content">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Score: {score}</p>
                <p>{price}€</p>
                <i id="book_card_addToCart" class="bi bi-cart-plus-fill" onClick={handleAddToCart}></i>
            </div>
        </div>
    );
}