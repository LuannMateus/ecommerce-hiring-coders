import { useState } from 'react';
import { createContext, ReactNode } from 'react';
import { Book } from '../model/Book';

type CartContextType = {
  items: Book[] | undefined;
  addBookToCart: (book: Book) => void;
  removeOneBookToCart: (book: Book) => void;
  removeAllBooks: () => void;
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider(props: CartContextProviderProps) {
  const [items, setItems] = useState<Book[]>([]);

  const addBookToCart = (book: Book) => {
    setItems([...items, book]);
  };

  const removeOneBookToCart = (book: Book) => {
    const newItemList = items.filter(
      (itemBook) => itemBook.title !== book.title
    );

    setItems(newItemList);
  };

  const removeAllBooks = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addBookToCart, removeOneBookToCart, removeAllBooks }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
