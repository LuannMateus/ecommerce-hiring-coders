import { useState } from 'react';
import { createContext, ReactNode } from 'react';
import { Book } from '../model/Book';

type CartContextType = {
  items: Book[] | undefined;
  addBookToCart: (book: Book) => void;
  removeOneBookToCart: (id: string) => void;
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

  const removeOneBookToCart = (id: string) => {
    let count = 0;

    const newItemList = items.filter((itemBook) => {
      if (itemBook.id === id && count === 0) {
        count++;
        return false;
      }

      return true;
    });

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
