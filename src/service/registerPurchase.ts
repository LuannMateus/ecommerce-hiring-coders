import { Book } from '../model/Book';

type SavePurchaseInLocalStorageProps = {
  userName: string;
  dateOfPurchase: string;
  purchase: {
    product: Book;
    quantity: number;
  };
};

const savePurchaseInLocalStorage = ({
  userName,
  dateOfPurchase,
  purchase,
}: SavePurchaseInLocalStorageProps) => {
  const existsData = !!localStorage.getItem(userName);

  if (!existsData) {
    localStorage.setItem(
      userName,
      JSON.stringify([{ dateOfPurchase, items: [purchase] }]).trim()
    );
  } else {
    const getData = localStorage.getItem(userName) ?? '';

    const oldData = JSON.parse(getData);

    const arrayItems = [
      ...oldData,
      {
        dateOfPurchase,
        items: [purchase],
      },
    ];

    localStorage.setItem(userName, JSON.stringify(arrayItems).trim());
  }
};

export { savePurchaseInLocalStorage };
