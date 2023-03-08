//React
import React from 'react';
//Plugins
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Styles
import styles from './SimpleSlider.module.scss';
//Imagens
import ArrowNext from '../../Assests/ArrowNext';
import ArrowPrev from '../../Assests/ArrowPrev';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowPrev />
    </div>
  );
}

class SimpleSlider extends React.Component {
  render() {
    const { children } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: `${styles.slickSlide}`,
      responsive: [
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            className: `${styles.slickSlide}`,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            className: `${styles.slickSlide}`,
          },
        },
        {
          breakpoint: 1155,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
            className: `${styles.slickSlide}`,
          },
        },
        {
          breakpoint: 1410,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
            className: `${styles.slickSlide}`,
          },
        },
      ],
    };
    return <Slider {...settings}>{children}</Slider>;
  }
}

export default SimpleSlider;
