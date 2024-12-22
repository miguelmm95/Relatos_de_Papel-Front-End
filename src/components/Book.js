import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookCard.css";

export const Book = ({id, title, author, img, score, price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/books/${id}`);
    };

    return (
        <div className="book_card" onClick={handleClick}>
            <img src={img} alt={title} />
            <div className="book_card_content">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Score: {score}</p>
                <p>{price}€</p>
            </div>
        </div>
    );
}