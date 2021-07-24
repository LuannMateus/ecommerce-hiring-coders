import { useBookcase } from '../../hooks/useBookcase';
import { BookcaseItem } from '../BookcaseItem';
import styles from './styles.module.scss';

export const Bookcase = (): JSX.Element => {
  const { books } = useBookcase();

  const renderBooks = () => {
    return books?.map((book) => {
      return <BookcaseItem book={book} key={`bookcaseItem_${Math.random()}`} />;
    });
  };

  return (
    <section className={styles.bookcaseBox}>
      <h1>Os clientes também gostam de comprar esses livros</h1>
      {renderBooks()}
    </section>
  );
};
