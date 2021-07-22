import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../model/Book';

import styles from './styles.module.scss';

type BookProp = {
  book: Book;
};

const MiniCard: FunctionComponent<BookProp> = ({ book }) => {
  const { title, thumbnailUrl, price } = book;

  const bookDiscount = (price - price * 0.2).toFixed(2).replace('.', ',');

  return (
    <div className={styles.card} key={`book_${title}_${Math.random()}`}>
      <Link to={`/product/${title}`}>
        <img src={thumbnailUrl} alt="" />
      </Link>
      <div className={styles.cardInformation}>
        <p className={styles.priceWithDiscount}>R$ {bookDiscount}</p>
        <p className={styles.price}>De {price} (20% de desconto)</p>
        <Link to={`/product/${book.title}`}>
          <p className={styles.title}>{title}</p>
        </Link>
        <p className={styles.site}>Enviando e vendido por bestbook.com</p>
      </div>
    </div>
  );
};

export { MiniCard };
