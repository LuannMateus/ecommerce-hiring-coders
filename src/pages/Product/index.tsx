import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { IoMdReturnLeft } from 'react-icons/io';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

import books from '../../data/data.json';

import { ProductIconInfo } from '../../components/ProductIconInfo';
import { ProductBuy } from '../../components/ProductBuy';
import { PersonalCarousel } from '../../components/Carousel';

import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Book } from '../../model/Book';
import { Helmet } from 'react-helmet';

const ProductPage = () => {
  const programmingBooks = books as Book[];

  const [book, setBook] = useState<Book>();

  const { id } = useParams() as { id: string };

  useEffect(() => {
    const localBook = localStorage.getItem('books') ?? '';

    const parseLocalBook = JSON.parse(localBook) as [];

    const book = parseLocalBook.filter((book: Book) => book.title === id);

    if (!book) {
      return;
    } else {
      setBook(book[0]);
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{id} | Best Book</title>
      </Helmet>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.productHeader}>
          <Link to="/" className={styles.backButton}>
            <IoMdReturnLeft />
            voltar para home
          </Link>
        </header>
        <main className={styles.mainProduct}>
          <img
            className={styles.productImage}
            src={book?.thumbnailUrl}
            alt=""
          />
          <section className={styles.productInfo}>
            <h1 className={styles.infoTitle}>{book?.title}</h1>
            <span className={styles.infoSubtitle}>
              Edição Português por Gabriel Dearo (Autor), Manu Digilio (Autor)
            </span>

            <p className={styles.infoDescription}>{book?.longDescription}</p>

            <section className={styles.infoBook}>
              <ProductIconInfo
                title="Número de pá..."
                subtitle={book?.pageCount ?? ''}
                icon="BsBook"
              />

              <ProductIconInfo
                title="Idioma"
                subtitle={book?.language ?? ''}
                icon="BsBook"
              />

              <ProductIconInfo
                title="Editora"
                subtitle={book?.publishingCompany ?? ''}
                icon="BsBook"
              />

              <ProductIconInfo
                title="Data da publicação"
                subtitle={book?.publishedDate ?? ''}
                icon="BsBook"
              />
            </section>
          </section>

          <section className={styles.mainProductBuy}>
            <ProductBuy
              book={
                book ?? {
                  title: 'Dom Casmurro',
                  thumbnailUrl:
                    'https://images-na.ssl-images-amazon.com/images/I/41GeyYROqTL._SX346_BO1,204,203,200_.jpg',
                  price: 48.0,
                  longDescription:
                    'Prometido para o seminário desde o nascimento, o jovem carioca Bentinho precisa encontrar um jeito de fugir da vida na Igreja e realizar seu verdadeiro sonho: casar-se com a  Capitu história de paixão, obsessão e ciúme se desenrola, em uma narrativa cheia de reviravoltas, que aos poucos constrói um retrato da sociedade brasileira. Com este romance publicado em 1899, o maior nome da literatura nacional, Machado de Assis, torna-se também parte do cânone mundial. Dom Casmurro traz contundentes reflexões sobre o Brasil de sua  ainda muito relevantes para os dias atuais, e faz isso com a narrativa repleta de ironia que é uma marca do autor. A nova edição da Antofágica traz o texto integral de Machado com notas e posfácio do especialista Rogério Fernandes dos Santos, além de ilustrações de Paula Siebra, apresentação da produtora  Camilla Dias e posfácios da atriz e escritora Maria Ribeiro do escritor Geovani Martins.',
                  authors: ['Machado De Assis'],
                  pageCount: 208,
                  publishingCompany: 'Principis',
                  publishedDate: '02 maio 2019',
                  language: 'Português',
                }
              }
            />
          </section>
        </main>

        <section className={styles.anotherBooks}>
          <h1>Mais livros</h1>
          <PersonalCarousel books={programmingBooks} />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
