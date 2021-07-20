import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type BookProp = {
  book: Book;
};

type Book = {
  title: string;
  imageURL: string;
  price: number;
};

const MiniCard: FunctionComponent<BookProp> = ({ book }) => {
  const { title, imageURL, price } = book;

  const bookDiscount = (price - price * 0.2).toFixed(2).replace('.', ',');

  return (
    <div className={styles.card} key={`book_${title}_${Math.random()}`}>
      <img src={imageURL} alt="" />
      <div className={styles.cardInformation}>
        <p className={styles.priceWithDiscount}>R$ {bookDiscount}</p>
        <p className={styles.price}>De {price} (20% de desconto)</p>
        <a href="/">
          <p className={styles.title}>{title}</p>
        </a>
        <p className={styles.site}>Enviando e vendido por bestbook.com</p>
      </div>
    </div>
  );
};

export { MiniCard };
