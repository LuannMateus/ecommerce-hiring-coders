import { useCart } from '../../hooks/useCart';
import { Book } from '../../model/Book';
import styles from './styles.module.scss';

type BookcaseItemProps = {
  book: Book;
};

export const BookcaseItem = ({ book }: BookcaseItemProps): JSX.Element => {
  const { addBookToCart } = useCart();

  const handleBook = () => {
    addBookToCart(book);
  };

  return (
    <section className={styles.bookcaseItemBox}>
      <img src={book.thumbnailUrl} alt={book.title} />
      <div className={styles.bookcaseItemInfo}>
        <h1>{book.title}</h1>
        <h2>{book.publishingCompany}</h2>

        <p className={styles.publish}>{book.authors}</p>
        <p className={styles.price}>R$ {book.price}</p>
        <button onClick={handleBook}>Adicionar ao carrinho</button>
      </div>
    </section>
  );
};
