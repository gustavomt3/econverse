//React
import React from 'react';
//Data Request
import { dataImagesBrands } from '../../Data/dataRequest';
//Components
import SimpleSlider from '../Slider/SimpleSlider';
//Styles
import styles from './Brands.module.scss';
//Imagens
import ArrowNext from '../../Assests/ArrowNext1';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styles.next}`} onClick={onClick}>
      <ArrowNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

function Brands() {
  return (
    <section className={`${styles.containerGeneral} ${styles.container}`}>
      <h2>Navegue por marcas</h2>
      <nav>
        <ul className={styles.ulBrands}>
          <SimpleSlider
            settings={{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              className: `${styles.slickSlide}`,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
              responsive: [
                {
                  breakpoint: 590,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                  },
                },
                {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                  },
                },
                {
                  breakpoint: 1155,
                  settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                  },
                },
                {
                  breakpoint: 1410,
                  settings: {
                    slidesToShow: 4,
                    arrows: false,
                    dots: true,
                  },
                },
              ],
            }}
          >
            {dataImagesBrands.map((item, index) => (
              <li className={styles.liBrands} key={index}>
                <img src={item} alt={item} />
              </li>
            ))}
          </SimpleSlider>
        </ul>
      </nav>
    </section>
  );
}

export default Brands;
