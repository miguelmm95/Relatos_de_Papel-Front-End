import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Book } from "../components/Book";
import { useBooks } from "../hooks/useBooks";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/Overview.css";

export const Overview = () => {

    const books = useBooks();

    return (
        <div>
            <h1 className="overview_title">Books</h1>
            <div className="ovewrview_container">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <Book
                            key={index}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            img={book.img}
                            synopsis={book.synopsis}
                            score={book.score}
                            price={book.price}
                        />
                    ))
                ) : (
                    <h2>LOADING BOOKS...</h2>
                )
            }

            </div>
        </div>
        
    );
}