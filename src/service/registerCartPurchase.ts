import { Book } from '../model/Book';

type SaveCartPurchaseInLocalStorageProps = {
  userName: string;
  dateOfPurchase: string;
  purchase: Purchase[] | [];
};

type Purchase = {
  product: Book;
  quantity: number;
};

const saveCartPurchaseInLocalStorage = ({
  userName,
  dateOfPurchase,
  purchase,
}: SaveCartPurchaseInLocalStorageProps) => {
  const existsData = !!localStorage.getItem(userName);

  if (!existsData) {
    localStorage.setItem(
      userName,
      JSON.stringify([{ dateOfPurchase, items: purchase }]).trim()
    );
  } else {
    const getData = localStorage.getItem(userName) ?? '';

    const oldData = JSON.parse(getData);

    const arrayItems = [
      ...oldData,
      {
        dateOfPurchase,
        items: purchase,
      },
    ];

    localStorage.setItem(userName, JSON.stringify(arrayItems).trim());
  }
};

export { saveCartPurchaseInLocalStorage };
