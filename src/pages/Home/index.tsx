import { Helmet } from 'react-helmet';

import data from '../../data/data.json';

import { PersonalCarousel } from '../../components/Carousel';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import styles from './styles.module.scss';
import { Book } from '../../model/Book';

const Home = () => {
  const books = data as Book[];

  return (
    <>
      <Helmet>
        <title>Home | Best Book</title>
      </Helmet>
      <Navbar />

      <header className={styles.homeHeader}>
        <h2>Promoções da semana</h2>
        <PersonalCarousel books={books} />
      </header>
      <main className={styles.homeMain}>
        <section className={styles.booksSection}>
          <h2>Livros de programação</h2>
          <PersonalCarousel books={books} />
        </section>

        <section className={styles.booksSection}>
          <h2>Livros de design</h2>
          <PersonalCarousel books={books} />
        </section>

        <section className={styles.booksSection}>
          <h2>Livros clássicos</h2>
          <PersonalCarousel books={books} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
