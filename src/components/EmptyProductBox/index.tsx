import { Link } from 'react-router-dom';
import { AiTwotoneBank } from 'react-icons/ai';

import styles from './styles.module.scss';

type EmptyProductBoxProps = {
  title: string;
  subtitle: string;
  icon: string;
};

const EmptyProductBox = ({ title, subtitle, icon }: EmptyProductBoxProps) => {
  const getIcon = () => {
    if (icon === 'AiTwotoneBank') {
      return <AiTwotoneBank className={styles.cartIcon} />;
    }
  };

  return (
    <div className={styles.cartEmptyContainer}>
      <section className={styles.cartEmptyBox}>
        {getIcon()}
        <div className={styles.cartEmptyInfo}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Link to="/">
            <button>Ir para página inicial</button>
          </Link>
        </div>
      </section>
      <section className={styles.emptyBox}></section>
      <p>
        O preço e a disponibilidade dos itens em bestbook.com estão sujeitos
        mudar. O carrinho é um local temporário para armazenar uma lista de seus
        itens e reflete o preço mais recente de cada item.
      </p>
    </div>
  );
};

export { EmptyProductBox };
