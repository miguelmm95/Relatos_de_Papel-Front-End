import { useEffect, useState } from 'react';
import { BookContext } from './context/BookContext';
import { BookRouter } from './router/router';

function App() {

  const books = useBooks();

  return (
    <BookContext.Provider value={books}>
      <BookRouter></BookRouter>
      <Footer />
    </BookContext.Provider>
  );
}

export default App;
