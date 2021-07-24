import { createContext, ReactNode } from 'react';
import { Book } from '../model/Book';

import data from '../data/data.json';

type BookcaseContextType = {
  books: Book[] | undefined;
};

type BookcaseContextProviderProps = {
  children: ReactNode;
};

export const BookcaseContext = createContext({} as BookcaseContextType);

export function BookcaseContextProvider(props: BookcaseContextProviderProps) {
  const books = [] as Book[];

  for (let i = 0; i < 4; i++) {
    books.push(data[i]);
  }

  return (
    <BookcaseContext.Provider value={{ books }}>
      {props.children}
    </BookcaseContext.Provider>
  );
}
