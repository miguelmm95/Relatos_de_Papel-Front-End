import React, { useContext } from "react";
import "../styles/BookDetails.css";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { CartContext } from "../context/CartContext";

export const BookDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const books = useContext(BookContext);
    const book = books.find(b => b.id === id);

    if (!book) {
        return <h1>Book not found</h1>;
    }

    const handleAddToCart = () => {
        addToCart(book);
    };

    return (
        <div className="bookDetails_container">
            <div className="bookDetails_info">
                <img className="bookDetails_img" src={book.img} alt={book.title} />
                <div className="bookDetails_content">
                    <h1 className="bookDetails_title">{book.title}</h1>
                    <p className="bookDetails_author">{book.author}</p>
                    <div className="bookDetails_synopsis">
                        <p>{book.synopsis}</p>
                    </div>
                </div>
            </div>
            <p className="bookDetails_score">Score: {book.score}</p>
            <p className="bookDetails_price">Price: {book.price}€</p>
            <button className="bookDetails_addToCart" onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};