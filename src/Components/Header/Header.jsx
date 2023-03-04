//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Styles
import styles from './Header.module.scss';
//Components
import Search from '../Search/Search';
import UlIcons from '../UlIcons/UlIcons';
import UlMenu from '../UlMenu/UlMenu';
//Imagens
import LogoVtex from '../../Assests/LogoVtex';

const Header = () => {
  //Context
  const { hamburguer, setHamburguer, activeHamburguer } =
    React.useContext(GlobalContext);
  //Components
  const activeClass = hamburguer ? styles.active : '';

  return (
    <header className={styles.containerGeneral}>
      <div className={styles.containerBlock1}>
        <nav className={styles.block1}>
          <div className={styles.spansHamburguer} onClick={activeHamburguer}>
            <span className={`${activeClass} ${styles.linha1}`}></span>
            <span className={`${activeClass} ${styles.linha2}`}></span>
            <span className={`${activeClass} ${styles.linha3}`}></span>
          </div>
          <a href="/" className={styles.logo}>
            <LogoVtex />
          </a>
          <div className={styles.search}>
            <Search />
          </div>
          <UlIcons />
        </nav>
      </div>
      <div className={styles.containerBlock2}>
        <nav className={styles.block2}>
          <UlMenu />
        </nav>
      </div>
      <div className={styles.block3}>
        <Search />
      </div>
      <nav className={`${styles.navHamburguer} ${activeClass} `}>
        <UlIcons />
        <UlMenu />
      </nav>
      <span
        className={`${styles.shadowHamburguer} ${activeClass}`}
        onClick={activeHamburguer}
      ></span>
    </header>
  );
};

export default Header;
