import { FunctionComponent } from 'react';

import { BsBook } from 'react-icons/bs';

import styles from './styles.module.scss';

type ProductIconInfoProps = {
  title: string;
  icon: string;
  subtitle: string | number;
};

const ProductIconInfo: FunctionComponent<ProductIconInfoProps> = ({
  title,
  subtitle,
  icon,
}) => {
  const renderIcon = () => {
    if (icon === 'BsBook') {
      return <BsBook className={styles.infoBookIcon} />;
    }
  };

  return (
    <section className={styles.infoBook}>
      <p className={styles.infoBookTitle}>{title}</p>
      {renderIcon()}
      <p className={styles.infoBookSubtitle}>{subtitle}</p>
    </section>
  );
};

export { ProductIconInfo };
