import { useEffect } from 'react';
import { Routes } from './Routes';

import data from './data/data.json';

import { Book } from './model/Book';

import { saveBooksInLocalStorage } from './service/registerBooks';

function App() {
  useEffect(() => {
    const books = data as Book[];

    saveBooksInLocalStorage('books', [...books]);
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
