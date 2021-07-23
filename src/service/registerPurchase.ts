type SavePurchaseInLocalStorageProps = {
  userName: string;
  purchase: {
    product: string;
    quantity: number;
  };
};

const savePurchaseInLocalStorage = ({
  userName,
  purchase,
}: SavePurchaseInLocalStorageProps) => {
  const existsData = !!localStorage.getItem(userName);

  if (!existsData) {
    localStorage.setItem(userName, JSON.stringify([purchase]).trim());
  } else {
    const getData = localStorage.getItem(userName) ?? '';

    const parseData = JSON.parse(getData);

    const arrayItems = [...parseData, purchase];

    localStorage.setItem(userName, JSON.stringify(arrayItems).trim());
  }
};

export { savePurchaseInLocalStorage };
