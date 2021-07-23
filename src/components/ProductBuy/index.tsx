import { useState } from 'react';
import { FunctionComponent } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { useCart } from '../../hooks/useCart';
import { Book } from '../../model/Book';
import { User } from '../../model/User';
import { savePurchaseInLocalStorage } from '../../service/registerPurchase';

import styles from './styles.module.scss';

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

    const userName = parseUser.name;

    const purchase = {
      product: book?.title ?? '',
      quantity: quantity,
    };

    savePurchaseInLocalStorage({ userName, purchase });
  };

  const handleCart = () => {
    addBookToCart(book);
  };

  return (
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
  );
};

export { ProductBuy };
