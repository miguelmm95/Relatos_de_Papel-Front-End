import React from "react";
import "../styles/BookCard.css";

export const Book = ({title, author, img, score, price }) => {
    return (
        <div className="book_card">
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