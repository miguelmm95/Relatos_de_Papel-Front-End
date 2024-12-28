import React from "react";
import { Book } from "../components/Book";
import { useBooks } from "../hooks/useBooks";
import "../styles/Overview.css";

export const Overview = () => {

    const books = useBooks();

    return (
        <div>
            <h1 className="overview_title">Libros</h1>
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
                            showFavorite={true}
                        />
                    ))
                ) : (
                    <h2>CARGANDO LIBROS...</h2>
                )
            }

            </div>
        </div>
        
    );
}