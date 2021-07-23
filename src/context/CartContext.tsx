import { useState } from 'react';
import { createContext, ReactNode } from 'react';
import { Book } from '../model/Book';

type CartContextType = {
  items: Book[] | undefined;
  addBookToCart: (book: Book) => void;
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

  return (
    <CartContext.Provider value={{ items, addBookToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
