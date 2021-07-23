import { Helmet } from 'react-helmet';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import styles from './styles.module.scss';
import { CartItem } from '../../components/CartItem';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
  const { items } = useCart();

  const renderCards = () => {
    return items?.map((book) => {
      return <CartItem book={book} />;
    });
  };

  return (
    <>
      <Helmet>
        <title>Cart | Best Book</title>
      </Helmet>
      <Navbar />
      <div className={styles.cartContainer}>
        <header className={styles.cartHeader}>
          <h1>Items Adicionados</h1>
        </header>
        <main className={styles.cartMain}>{renderCards()}</main>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
