import { useEffect, useState } from 'react';
import { BookList } from "../components/BookList";

export const useBooks = () => {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            console.log("Books:", BookList);
            setBooks(BookList);
        }, 2500);
    }, []);
    
    return books
}