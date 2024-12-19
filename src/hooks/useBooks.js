import { BookList } from "../components/BookList";

export const useBooks = () => {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks(BookList);
        }, 2500);
    }, []);
    
    return books
}