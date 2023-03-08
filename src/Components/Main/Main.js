//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
import MainBanner from '../MainBanner/MainBanner';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
//Styles
import styles from './Main.module.scss';
//Images
import imgBanner from '../../Assests/imgBanner.jpg';

function Main() {
  //Context
  const { modalCard, setModalCard, data } = React.useContext(GlobalContext);
  return (
    <main className={styles.containerGeneral}>
      <MainBanner
        img={imgBanner}
        title="Venha conhecer nossas promoções"
        subtitle="50% Off nos produtos "
        textButton="Ver Produto"
      />
      <Categories />
      <ProductList title="Produtos relacionados" option="filtro" />
    </main>
  );
}

export default Main;
