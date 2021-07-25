import { useEffect } from 'react';
import { Routes } from './Routes';
import { CartContextProvider } from './context/CartContext';

import data from './data/data.json';

import { Book } from './model/Book';

import { saveBooksInLocalStorage } from './service/registerBooks';
import { BookcaseContextProvider } from './context/BookcaseContext';

function App() {
  useEffect(() => {
    const existsData = !!localStorage.getItem('books') ?? '';

    if (!existsData) {
      const books = data as Book[];

      saveBooksInLocalStorage('books', [...books]);
    }
  }, []);

  useEffect(() => {
    const existsData = !!localStorage.getItem('user') ?? '';

    if (!existsData) {
      localStorage.setItem(
        'user',
        JSON.stringify({ name: '', email: '', imageUrl: '' })
      );
    }
  }, []);

  return (
    <div className="App">
      <BookcaseContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </BookcaseContextProvider>
    </div>
  );
}

export default App;
