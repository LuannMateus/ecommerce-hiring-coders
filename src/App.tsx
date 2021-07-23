import { useEffect } from 'react';
import { Routes } from './Routes';
import { CartContextProvider } from './context/CartContext';

import data from './data/data.json';

import { Book } from './model/Book';

import { saveBooksInLocalStorage } from './service/registerBooks';

function App() {
  useEffect(() => {
    const existsData = !!localStorage.getItem('books') ?? '';

    if (!existsData) {
      const books = data as Book[];

      saveBooksInLocalStorage('books', [...books]);
    }
  }, []);

  return (
    <div className="App">
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </div>
  );
}

export default App;
