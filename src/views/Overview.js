import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Book } from "../components/Book";

export const Overview = () => {

    const { books } = useContext(BookContext);

    return (
        <div>
            <h1 className="overview_title">Books</h1>
            <div className="ovewrview_container">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <Book
                            key={index}
                            title={book.title}
                            author={book.author}
                            img={book.img}
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