import React from 'react';
import { BookContext } from './context/BookContext';
import { BookRouter } from './router/Router';
import { useBooks } from './hooks/useBooks';
import { CartProvider } from './context/CartContext';

function App() {

  const books = useBooks();
  console.log("Books in App:", books);

  return (
    <BookContext.Provider value={books}>
      <CartProvider>
        <BookRouter />
      </CartProvider>
    </BookContext.Provider>
  );
}

export default App;
