import React, { useContext } from "react";
import "../styles/BookDetails.css";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";

export const BookDetails = () => {
    const { id } = useParams();
    const books = useContext(BookContext);
    const book = books.find(b => b.id === id);

    if (!book) {
        return <h1>Book not found</h1>;
    }

    return (
        <div className="bookDetails_container">
            <div className="bookDetails_header">
                
            </div>
            <div className="bookDetails_info">
                <h1 className="bookDetails_title">{book.title}</h1>
                <img className="bookDetails_img" src={book.img} alt={book.title} />
                <p className="bookDetails_author">Author: {book.author}</p>
                <p className="bookDetails_score">Score: {book.score}</p>
                <p className="bookDetails_price">Price: {book.price}€</p>
            </div>
            <div className="bookDetails_synopsis">
                <p>{book.synopsis}</p>
            </div>
        </div>
    );
};