import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useFavorites from "../hooks/useFavorites";
import "../styles/BookCard.css";

export const Book = ({id, title, author, img, score, price, showFavorite }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(favorites.some(fav => fav.id === id));
    }, [favorites, id]);

    const handleClick = () => {
        navigate(`/books/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation()
        addToCart({id, title, img, price})
    };

    const handleAddToFavorite = (e) => {
        e.stopPropagation()
        const book = {id, title, author, img, score, price};
        if(!isFavorite){
            addFavorite(book);
        }else{
            removeFavorite(id);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="book_card" onClick={handleClick}>
            <img src={img} alt={title}/>
            <div className="book_card_content">
                <div className="book_card_header">
                    <h3>{title}</h3>
                    {showFavorite && (
                        <i id="book_card_star" className={`bi ${isFavorite ? "bi-star-fill" : "bi-star"}`} onClick={handleAddToFavorite}></i>
                    )}
                </div>
                <p>Author: {author}</p>
                <p>Score: {score}</p>
                <p>{price}€</p>
                <i id="book_card_addToCart" class="bi bi-cart-plus-fill" onClick={handleAddToCart}></i>
            </div>
        </div>
    );
}