type SaveCartPurchaseInLocalStorageProps = {
  userName: string;
  purchase: Purchase[] | [];
};

type Purchase = {
  product: string;
  quantity: number;
};

const saveCartPurchaseInLocalStorage = ({
  userName,
  purchase,
}: SaveCartPurchaseInLocalStorageProps) => {
  const existsData = !!localStorage.getItem(userName);

  if (!existsData) {
    localStorage.setItem(userName, JSON.stringify(purchase).trim());
  } else {
    const getData = localStorage.getItem(userName) ?? '';

    const oldData = JSON.parse(getData);

    const arrayItems = [...oldData, ...purchase];

    localStorage.setItem(userName, JSON.stringify(arrayItems).trim());
  }
};

export { saveCartPurchaseInLocalStorage };
