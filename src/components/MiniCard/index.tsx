import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Book } from '../../model/Book';

import styles from './styles.module.scss';

type BookProp = {
  book: Book;
};

const MiniCard: FunctionComponent<BookProp> = ({ book }) => {
  const history = useHistory();

  const { title, thumbnailUrl, price } = book;

  const formatPrice = (+price * 1).toFixed(2).replace('.', ',');
  const formatDiscount = (+price * 0.2).toFixed(2).replace('.', ',');

  return (
    <div className={styles.card} key={`book_${title}_${Math.random()}`}>
      <img
        src={thumbnailUrl}
        alt={title}
        onDoubleClick={() => history.push(`/product/${title}`)}
      />
      {/* <Link to={`/product/${title}`}></Link> */}
      <div className={styles.cardInformation}>
        <p className={styles.priceWithDiscount}>R$ {formatDiscount}</p>
        <p className={styles.price}>De {formatPrice} (20% de desconto)</p>
        <Link to={`/product/${book.title}`}>
          <p className={styles.title}>{title}</p>
        </Link>
        <p className={styles.site}>Enviando e vendido por bestbook.com</p>
      </div>
    </div>
  );
};

export { MiniCard };
