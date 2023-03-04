//React
import React from 'react';
//Components
import Button from '../Button/Button';
//Styles
import styles from './MainBanner.module.scss';

function MainBanner({ img, title, subtitle, textButton }) {
  return (
    <section className={styles.containerGeneral}>
      <div
        style={{
          backgroundImage: `url("${img}")`,
        }}
        className={styles.container}
      >
        {title ? <h2>{title}</h2> : ''}
        {subtitle ? <p>{subtitle}</p> : ''}
        {textButton ? <Button text={textButton} /> : ''}
      </div>
    </section>
  );
}

export default MainBanner;
