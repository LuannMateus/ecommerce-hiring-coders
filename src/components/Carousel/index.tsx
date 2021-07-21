import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import styles from './styles.module.scss';

import { MiniCard } from '../MiniCard';
import { Fragment, FunctionComponent, useState } from 'react';
import { Book } from '../../model/Book';

type PersonalCarouselProps = {
  books: Book[];
};

const PersonalCarousel: FunctionComponent<PersonalCarouselProps> = ({
  books,
}) => {
  const [actualWidth, setActualWidth] = useState({});

  const slides = actualWidth < 580 ? 2 : 4;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  };

  const updateScreenWidth = () => {
    setActualWidth(window.innerWidth);
  };

  window.addEventListener('resize', updateScreenWidth);

  const renderBooks = () => {
    return books.map((book) => {
      return (
        <Fragment key={`carousel_item_${Math.random()}`}>
          <MiniCard book={book} />
        </Fragment>
      );
    });
  };

  return (
    <Slider className={styles.carousel} {...settings}>
      {renderBooks()}
    </Slider>
  );
};

export { PersonalCarousel };
