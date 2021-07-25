import { GiCheckMark } from 'react-icons/gi';
// import { FaTrashAlt } from 'react-icons/fa';

import styles from './styles.module.scss';
import { Extract, ExtractItemT } from '../../model/Extract';

type ExtractItemProps = {
  extract: Extract;
};

const ExtractItem = ({ extract }: ExtractItemProps) => {
  const renderExtractBlock = () => {
    return extract.items.map((item: ExtractItemT) => {
      return (
        <div
          className={styles.cardContainer}
          key={`extract_item_${Math.random()}`}
        >
          <div className={styles.headerItem}>
            <GiCheckMark className={styles.extractItemIcon} />
            <div className={styles.imageAndTitle}>
              <img
                src={item.product.thumbnailUrl}
                alt=""
                className={styles.extractItemImage}
              />
              <h1>{item.product.title}</h1>
            </div>
          </div>

          <div className={styles.extractItemInfo}>
            <p className={styles.extractItemPrice}>
              Total da compra (1 item): R${' '}
              {item.product.price.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className={styles.extractItemBox}>
      <div className={styles.itemsContainer}>{renderExtractBlock()}</div>
    </section>
  );
};

export { ExtractItem };
