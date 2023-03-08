//React
import React from 'react';
//Styles
import styles from './Filter.module.scss';

function Filter() {
  //Component
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className={styles.containerFilter}>
      <li
        className={activeIndex === 0 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(0)}
      >
        celular
      </li>
      <li
        className={activeIndex === 1 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(1)}
      >
        acessórios
      </li>
      <li
        className={activeIndex === 2 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(2)}
      >
        tablets
      </li>
      <li
        className={activeIndex === 3 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(3)}
      >
        notebooks
      </li>
      <li
        className={activeIndex === 4 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(4)}
      >
        tvs
      </li>
    </ul>
  );
}

export default Filter;
