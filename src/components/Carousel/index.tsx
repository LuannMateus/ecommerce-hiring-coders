import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import styles from './styles.module.scss';

import { MiniCard } from '../MiniCard';
import { Fragment, FunctionComponent } from 'react';
import { Book } from '../../model/Book';

type PersonalCarouselProps = {
  books: Book[];
};

const PersonalCarousel: FunctionComponent<PersonalCarouselProps> = ({
  books,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 60,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

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
