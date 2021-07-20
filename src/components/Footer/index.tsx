import FacebookLogo from '../../assets/img/facebook.svg';
import InstagramLogo from '../../assets/img/instagram.svg';
import GithubLogo from '../../assets/img/github.svg';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.backButton}>Voltar ao inicio</button>

      <section className={styles.footerSocialMedias}>
        <a href="/">
          <img
            src={FacebookLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>

        <a href="/">
          <img
            src={InstagramLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>

        <a href="/">
          <img
            src={GithubLogo}
            alt="Facebbok Logo"
            aria-label="Facebbok Logo"
          />
        </a>
      </section>
    </footer>
  );
};

export { Footer };
