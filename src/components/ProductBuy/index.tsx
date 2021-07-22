import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

type ProductBuyProps = {
  price: number | string;
};

const ProductBuy: FunctionComponent<ProductBuyProps> = ({ price }) => {
  return (
    <section className={styles.box}>
      <div className={styles.priceBox}>
        <p>
          Comprar <br /> novo:{' '}
        </p>
        <span>R$ {price}</span>
      </div>
      <p className={styles.priceWithoutDiscount}>De: R$ 37,90</p>
      <p className={styles.discountInfo}>Você economiza: R$ 5,70 (15%)</p>
      <p className={styles.shippingInfo}>
        Entrega com Frete GRÁTIS no seu primeiro pedido.
      </p>
      <p className={styles.promotionInfo}>
        <span>Este produto será lançado em 4/Agosto/2021.</span>
        <br /> Aproveite e leia agora! A versão desse título também está
        disponível no formato eBook e pode ser lido no App gratuito de leitura
        Kindle. Reserve o seu na pré-venda.
      </p>
      <p className={styles.productQuantity}>Quantidade: 1</p>
      <button className={styles.buyButton}>Comprar</button>
      <p className={styles.safetyTransaction}> :) Transação segura</p>
      <p className={styles.sendByInfo}>
        {' '}
        <span>Enviado</span> por Amazon.com.br
      </p>
      <p className={styles.saleByInfo}>
        {' '}
        <span>Vendido</span> por Amazon.com.br
      </p>
    </section>
  );
};

export { ProductBuy };
