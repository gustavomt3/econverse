//React
import React from 'react';
//Components
import MainBanner from '../MainBanner/MainBanner';
//Styles
import styles from './Main.module.scss';
//Images
import imgBanner from '../../Assests/imgBanner.jpg';

function Main() {
  return (
    <>
      <MainBanner
        img={imgBanner}
        title="Venha conhecer nossas promoções"
        subtitle="50% Off nos produtos "
        textButton="Ver Produto"
      />
    </>
  );
}

export default Main;
