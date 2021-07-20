import { Books } from '../../components/Books';
import { PersonalCarousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

import { Helmet } from 'react-helmet';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Best Book</title>
      </Helmet>
      <Navbar />
      <header className={styles.homeHeader}>
        <h2>Promoções da semana</h2>
        <PersonalCarousel />
      </header>
      <main className={styles.homeMain}>
        <h2>Livros em promoção</h2>
        <section className={styles.booksGrid}>
          <Books />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
