import { useEffect, useState } from 'react';
import { favoritesData } from '../components/FavoritesList';

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(favoritesData);
    }, []);

    const addFavorite = (book) => {
        setFavorites((prevFavorites) => {
            if(prevFavorites.find((favorite) => favorite.id === book.id)){          //Avoid duplicates
                return prevFavorites;
            }
            const updatedFavorites = [...prevFavorites, book];
            favoritesData.push(book);
            return updatedFavorites;
        });
    };

    const removeFavorite = (id) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((favorite) => favorite.id !== id);
            const index = favoritesData.findIndex((favorite) => favorite.id === id);
            if (index !== -1) {
                favoritesData.splice(index, 1);
            }
            console.log(favoritesData);
            return updatedFavorites;
        })
    };

    return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;