import React from 'react';
import useFavorites from '../hooks/useFavorites';
import { Book } from '../components/Book';
import '../styles/FavoritesView.css';

const FavoritesView = () => {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div>
            <h1 className="favorites_title">Mis libros favoritos</h1>
            <div className="favorites_container">
                {favorites.length > 0 ? (
                    favorites.map((book) => (
                        <div key={book.id} className="favorite_book">
                            <Book
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                img={book.img}
                                score={book.score}
                                price={book.price}
                            />
                            <button className="remove_button" onClick={() => removeFavorite(book.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>No hay libros favoritos</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesView;