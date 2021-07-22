import { Book } from '../model/Book';

const saveBooksInLocalStorage = (key: string, data: Book[]) => {
  localStorage.setItem(key, JSON.stringify(data).trim());
};

export { saveBooksInLocalStorage };
