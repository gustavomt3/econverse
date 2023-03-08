//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import SimpleSlider from '../Slider/SimpleSlider';
//Styles
import styles from './ProductList.module.scss';
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

const ProductList = ({ title, option }) => {
  //Context
  const { data, loading, setModalCard } = React.useContext(GlobalContext);
  return (
    <section className={`${styles.containerGeneral} ${styles.container}`}>
      <div className={`${styles.titleOptions}`}>
        {title && (
          <div className={styles.title}>
            <span></span>
            <h2>{title}</h2>
            <span></span>
          </div>
        )}
        {option && option === 'filtro' && <Filter />}
        {option && option === 'ver-todos' && (
          <p className={styles.verTodos}>Ver todos</p>
        )}
      </div>
      {loading && (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )}
      {!loading && data && (
        <SimpleSlider
          settings={{
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
          }}
        >
          {data.map((data, index) => {
            return <Card key={index} data={data} setModalCard={setModalCard} />;
          })}
        </SimpleSlider>
      )}
    </section>
  );
};

export default ProductList;
