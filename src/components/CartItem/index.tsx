import { useCart } from '../../hooks/useCart';
import { Book } from '../../model/Book';

import styles from './styles.module.scss';

type CartItemProps = {
  book: Book;
};

const CartItem = ({ book }: CartItemProps) => {
  const { removeOneBookToCart } = useCart();

  const handleRemove = () => {
    removeOneBookToCart(book.id);
  };

  return (
    <section className={styles.cartBox}>
      <div className={styles.cartImage}>
        <img src={book.thumbnailUrl} alt="" className={styles.cartImage} />
      </div>
      <div className={styles.infoCartBox}>
        <div className={styles.titleBox}>
          <h2 className={styles.infoTitle}>{book.title}</h2>
          <span>R$ {book.price}</span>
        </div>

        <p className={styles.infoAuthor}>por {book.authors}</p>
        <p className={styles.infoPublish}>{book.publishingCompany}</p>
        <section className={styles.cartItemButtonActions}>
          <button className={styles.removeButton} onClick={handleRemove}>
            Remover
          </button>
        </section>
      </div>
    </section>
  );
};

export { CartItem };
