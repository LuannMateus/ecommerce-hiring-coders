import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';
import { FunctionComponent } from 'react';

import styles from './styles.module.scss';

type BookProp = {
  book: Book;
};

type Book = {
  title: string;
  imageURL: string;
  price: number;
};

const BookCard: FunctionComponent<BookProp> = ({ book }) => {
  const { title, imageURL, price } = book;

  const bookDiscount = (price - price * 0.2).toFixed(2).replace('.', ',');

  return (
    <Card className={styles.card} key={`book_${title}_${Math.random()}`}>
      <CardActionArea>
        <CardMedia className={styles.cardImage} image={imageURL} />
        <CardContent className={styles.cardContent}>
          <h2>{title}</h2>

          <p>
            <span> De R$ {price}</span> <br /> POR <br />{' '}
            <strong>R$ {bookDiscount}</strong>
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { BookCard };
