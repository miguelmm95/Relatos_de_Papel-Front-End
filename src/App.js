import { useEffect, useState } from 'react';
import { BookContext } from './context/BookContext';
import { BookRouter } from './router/Router';
import { Footer } from './components/Footer';
import { useBooks } from './hooks/useBooks';

function App() {

  const books = useBooks();

  return (
    <BookContext.Provider value={books}>
      <BookRouter />
    </BookContext.Provider>
  );
}

export default App;
