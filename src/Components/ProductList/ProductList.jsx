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
        <SimpleSlider>
          {data.map((data, index) => {
            return <Card key={index} data={data} setModalCard={setModalCard} />;
          })}
        </SimpleSlider>
      )}
    </section>
  );
};

export default ProductList;
