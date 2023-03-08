//React
import React from 'react';
//Components
import Button from '../Button/Button';
//Styles
import styles from './DualBanner.module.scss';

function DualBanner({
  height,
  imgBanner1,
  imgBanner2,
  textButton,
  titleBanner1,
  titleBanner2,
  textBanner1,
  textBanner2,
}) {
  return (
    <section className={`${styles.containerGeneral} ${styles.container}`}>
      <div className={styles.banner1}>
        {imgBanner1 && <img src={imgBanner1} alt={imgBanner1} />}
        {titleBanner1 && <h2>{titleBanner1}</h2>}
        {textBanner1 && <p>{textBanner1}</p>}
        {textButton && <Button text={textButton} />}
      </div>
      <div className={styles.banner2}>
        {imgBanner1 && <img src={imgBanner1} alt={imgBanner1} />}
        {titleBanner2 && <h2>{titleBanner2}</h2>}
        {textBanner2 && <p>{textBanner2}</p>}
        {textButton && <Button text={textButton} />}
      </div>
    </section>
  );
}

export default DualBanner;
