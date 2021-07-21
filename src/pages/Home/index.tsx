import { Helmet } from 'react-helmet';

import weekPromotionsBooks from '../../data/weekPromotions.json';
import programmingBooks from '../../data/programmingBooks.json';
import designBooks from '../../data/designBooks.json';
import classicBrazilianBooks from '../../data/classicBrazilianBooks.json';

import { PersonalCarousel } from '../../components/Carousel';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import styles from './styles.module.scss';
import { Book } from '../../model/Book';

const Home = () => {
  const programmingCategory = programmingBooks as Book[];
  const designCategory = designBooks as Book[];
  const classicCategory = classicBrazilianBooks as Book[];
  const weekPromotionsCategory = weekPromotionsBooks as Book[];

  return (
    <>
      <Helmet>
        <title>Home | Best Book</title>
      </Helmet>
      <Navbar />

      <header className={styles.homeHeader}>
        <h2>Promoções da semana</h2>
        <PersonalCarousel books={weekPromotionsCategory} />
      </header>
      <main className={styles.homeMain}>
        <section className={styles.booksSection}>
          <h2>Livros de programação</h2>
          <PersonalCarousel books={programmingCategory} />
        </section>

        <section className={styles.booksSection}>
          <h2>Livros de design</h2>
          <PersonalCarousel books={designCategory} />
        </section>

        <section className={styles.booksSection}>
          <h2>Livros clássicos</h2>
          <PersonalCarousel books={classicCategory} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
