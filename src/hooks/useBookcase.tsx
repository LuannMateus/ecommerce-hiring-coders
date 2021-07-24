import { useContext } from 'react';
import { BookcaseContext } from '../context/BookcaseContext';

export const useBookcase = () => {
  const value = useContext(BookcaseContext);

  return value;
};
