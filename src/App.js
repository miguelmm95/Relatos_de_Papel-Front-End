import { useEffect, useState } from 'react';
import { BookContext } from './context/BookContext';
import { BookRouter } from './router/Router';
import { useBooks } from './hooks/useBooks';

function App() {

  const books = useBooks();
  console.log("Books in App:", books);

  return (
    <BookContext.Provider value={books}>
      <BookRouter />
    </BookContext.Provider>
  );
}

export default App;
