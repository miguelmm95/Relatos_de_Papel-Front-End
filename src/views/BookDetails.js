import React, { useContext} from "react";
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
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Score: {book.score}</p>
            <p>Price: {book.price}€</p>
            <p>{book.synopsis}</p>
        </div>
    );
};