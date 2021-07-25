import { useState } from 'react';
import { FunctionComponent } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { useCart } from '../../hooks/useCart';
import { Book } from '../../model/Book';
import { User } from '../../model/User';
import { savePurchaseInLocalStorage } from '../../service/registerPurchase';
import { toast, ToastContainer } from 'react-toastify';

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

type ProductBuyProps = {
  book: Book;
};

const ProductBuy: FunctionComponent<ProductBuyProps> = ({ book }) => {
  const { addBookToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const discount = +book!.price * 0.2;

  const formatPrice = (+book!.price * 1).toFixed(2).replace('.', ',');
  const formatDiscount = (+book!.price * 0.2).toFixed(2).replace('.', ',');
  const priceWithDiscount = (+book!.price - discount)
    .toFixed(2)
    .replace('.', ',');

  const handleBuy = () => {
    const user = localStorage.getItem('user') ?? '';

    const parseUser = JSON.parse(user) as User;

    if (parseUser.email === '' && parseUser.email === '') {
      toast.error('Usuário precisar estar logado para comprar!');
      return;
    }

    const userName = parseUser.name;

    const purchase = {
      product: book,
      quantity: quantity,
    };

    const date = new Date();

    const dateOfPurchase = `${date.getDate()}/${date.getMonth()}`;

    try {
      savePurchaseInLocalStorage({ userName, dateOfPurchase, purchase });
      toast.success('Livro comprado com sucesso!');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCart = () => {
    addBookToCart(book);
    toast.success('Livro adicionado no carrinho!');
  };

  return (
    <>
      <ToastContainer />
      <section className={styles.box}>
        <div className={styles.priceBox}>
          <p>
            Comprar <br /> novo:{' '}
          </p>
          <span>R$ {priceWithDiscount}</span>
        </div>
        <p className={styles.priceWithoutDiscount}>De: R$ {formatPrice}</p>
        <p className={styles.discountInfo}>
          Você economiza: R$ {formatDiscount} (20%)
        </p>
        <p className={styles.shippingInfo}>
          Entrega com Frete GRÁTIS no seu primeiro pedido.
        </p>
        <p className={styles.promotionInfo}>
          <span>Este produto será lançado em 4/Agosto/2021.</span>
          <br /> Aproveite e leia agora! A versão desse título também está
          disponível no formato eBook e pode ser lido no App gratuito de leitura
          Kindle. Reserve o seu na pré-venda.
        </p>
        <p className={styles.productQuantity}>
          Quantidade:{' '}
          <input
            type="number"
            value={quantity}
            min="1"
            max="10"
            onChange={(event) => setQuantity(+event.target.value)}
          />
        </p>
        <button className={styles.buyButton} onClick={handleCart}>
          Adicionar ao carrinho
        </button>
        <button className={styles.buyButton} onClick={handleBuy}>
          Comprar
        </button>
        <p className={styles.safetyTransaction}>
          {' '}
          <HiLockClosed className={styles.lockIcon} />
          Transação segura
        </p>
        <p className={styles.sendByInfo}>
          {' '}
          <span>Enviado</span> por bestbook.com.br
        </p>
        <p className={styles.saleByInfo}>
          {' '}
          <span>Vendido</span> por bestbook.com.br
        </p>
      </section>
    </>
  );
};

export { ProductBuy };
