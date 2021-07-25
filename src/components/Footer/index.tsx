import Logo from '../../assets/img/logo.svg';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#navbar">
        <button className={styles.backButton}>Voltar ao inicio</button>
      </a>

      <section className={styles.footerInfo}>
        <div className={styles.infoMeetUsBlock}>
          <h1>Conheça-nos</h1>
          <p>
            Informações <br /> corporativas
          </p>
          <p>Comunidade</p>
        </div>

        <div className={styles.infoEarMoneyBlock}>
          <h1>Ganhe dinheiro conosco</h1>
          <p>Publique seus livros</p>
          <p>Seja um associado</p>
        </div>

        <div className={styles.infoEarMoneyBlock}>
          <h1>Deixe-nos ajudá-lo</h1>
          <p>Sua conta</p>
        </div>

        <div className={styles.infoEarMoneyBlock}>
          <h1>Pagamento</h1>
          <p>Cartões de crédito e Boleto</p>
        </div>
      </section>

      <img src={Logo} alt="Best Book Logo" />
    </footer>
  );
};

export { Footer };
