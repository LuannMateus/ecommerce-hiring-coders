import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Bookcase } from '../../components/Bookcase';

import { CartItem } from '../../components/CartItem';
import { useCart } from '../../hooks/useCart';

import { toast, ToastContainer } from 'react-toastify';

import { GiShoppingCart } from 'react-icons/gi';

import { User } from '../../model/User';
import { saveCartPurchaseInLocalStorage } from '../../service/registerCartPurchase';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Cart = () => {
  const { items, removeAllBooks } = useCart();

  const purchaseCartItems = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? '');

    const parseUser = user as User;

    if (parseUser.name === '' && parseUser.email === '') {
      toast.error('Usuário precisar estar logado para comprar!');
      return;
    } else {
      const purchase =
        items?.map((item) => {
          return {
            product: item,
            quantity: 1,
          };
        }) ?? [];

      const userName = parseUser.name;

      const date = new Date();

      const dateOfPurchase = `${date.getDate()}/${date.getMonth()}`;

      try {
        saveCartPurchaseInLocalStorage({ userName, dateOfPurchase, purchase });
        toast.success('Compra realizada com sucesso!');
        removeAllBooks();
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const renderCards = () => {
    return items?.map((book) => {
      return <CartItem book={book} key={`cartItem_${Math.random()}`} />;
    });
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Cart | Best Book</title>
      </Helmet>
      <Navbar />
      <div className={styles.cartContainer}>
        <header className={styles.cartHeader}>
          <h1>Items Adicionados</h1>
        </header>
        <main className={styles.cartMain}>
          {items?.length ?? 0 ? (
            <section className={styles.cartItems}>
              {renderCards()}
              <div className={styles.cartPurchaseBox}>
                <p>
                  Subtotal (1 item): <span>$13.58</span>{' '}
                </p>
                <button onClick={purchaseCartItems}>Comprar</button>
              </div>
            </section>
          ) : (
            <div className={styles.cartEmptyContainer}>
              <section className={styles.cartEmptyBox}>
                <GiShoppingCart className={styles.cartIcon} />
                <div className={styles.cartEmptyInfo}>
                  <h1>Seu carrinho da Best Book está vazio</h1>
                  <p>Negócios de hoje</p>
                  <Link to="/">
                    <button>Ir para página inicial</button>
                  </Link>
                </div>
              </section>
              <section className={styles.emptyBox}></section>
              <p>
                O preço e a disponibilidade dos itens em bestbook.com estão
                sujeitos mudar. O carrinho é um local temporário para armazenar
                uma lista de seus itens e reflete o preço mais recente de cada
                item.
              </p>
            </div>
          )}
          <Bookcase />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
