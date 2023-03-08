//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Components
import MainBanner from '../MainBanner/MainBanner';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
import DualBanner from '../DualBanner/DualBanner';
//Styles
import styles from './Main.module.scss';
//Images
import imgBanner from '../../Assests/imgBanner.jpg';
import imgDualBanner from '../../Assests/imgDualBanner.jpg';
import imgDualBanner1 from '../../Assests/imgDualBanner1.png';

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
      <DualBanner
        imgBanner1={imgDualBanner}
        imgBanner2={imgDualBanner}
        titleBanner1="Parceiros"
        titleBanner2="Parceiros"
        textBanner1="Lorem ipsum dolor sit amet, consectetur"
        textBanner2="Lorem ipsum dolor sit amet, consectetur"
        textButton="confira"
      />
      <ProductList title="Produtos relacionados" option="ver-todos" />
      <DualBanner
        imgBanner1={imgDualBanner1}
        imgBanner2={imgDualBanner1}
        titleBanner1="Parceiros"
        titleBanner2="Parceiros"
        textBanner1="Lorem ipsum dolor sit amet, consectetur"
        textBanner2="Lorem ipsum dolor sit amet, consectetur"
        textButton="confira"
      />
    </main>
  );
}

export default Main;
