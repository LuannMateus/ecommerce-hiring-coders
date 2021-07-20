import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import styles from './styles.module.scss';

import { MiniCard } from '../MiniCard';

const books = [
  {
    title: 'Test Driven Development',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL.jpg',
    price: 296.44,
  },
  {
    title: 'Python Programming',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41z1V0zP2WL.jpg',
    price: 101.08,
  },
  {
    title: 'Domain Driven Design',
    imageURL: 'https://m.media-amazon.com/images/I/51OWGtzQLLL.jpg',
    price: 470.99,
  },
  {
    title: 'Padrões de Projeto',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/51bO3rI8hEL._SX348_BO1,204,203,200_.jpg',
    price: 402.96,
  },
  {
    title: 'Test Driven Development',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL.jpg',
    price: 296.44,
  },
  {
    title: 'Test Driven Development',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL.jpg',
    price: 296.44,
  },
];

const PersonalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const renderBooks = () => {
    return books.map((book) => {
      return <MiniCard book={book} />;
    });
  };

  return (
    <Slider className={styles.carousel} {...settings}>
      {renderBooks()}
    </Slider>
  );
};

export { PersonalCarousel };
