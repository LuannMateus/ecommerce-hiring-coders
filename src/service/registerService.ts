import { Product } from '../model/Product';
import { User } from '../model/User';

const saveUserInLocalStorage = (key: string, data: User | Product) => {
  const existsData = !!localStorage.getItem(key);

  if (!existsData) {
    localStorage.setItem(key, JSON.stringify([data]).trim());
  } else {
    const getData = localStorage.getItem(key) ?? '';

    const parseData = JSON.parse(getData);

    const arrayItems = [...parseData, data];

    localStorage.setItem(key, JSON.stringify(arrayItems).trim());
  }
};

// const saveProductInLocalStorage = (key: string, data: Product) => {
//   const actualData = JSON.stringify(localStorage.getItem(key));

//   const newData = actualData.concat(JSON.stringify(data));

//   localStorage.setItem(key, JSON.stringify(newData));
// };

export { saveUserInLocalStorage };
