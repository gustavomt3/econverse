//React
import React from 'react';
//Styles
import styles from './UlMenu.module.scss';
//Imagens
import Crown from '../../Assests/Crown';

function UlMenu() {
  //Component
  const [activeIndex, setActiveIndex] = React.useState(5);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul>
      <li
        className={activeIndex === 0 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(0)}
      >
        <a href="#">todas categorias</a>
      </li>
      <li
        className={activeIndex === 1 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(1)}
      >
        <a href="#">supermercado</a>
      </li>
      <li
        className={activeIndex === 2 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(2)}
      >
        <a href="#">livros</a>
      </li>
      <li
        className={activeIndex === 3 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(3)}
      >
        <a href="#">moda</a>
      </li>
      <li
        className={activeIndex === 4 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(4)}
      >
        <a href="#">lançamentos</a>
      </li>
      <li
        className={activeIndex === 5 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(5)}
      >
        <a href="#">ofertas do dia</a>
      </li>
      <li
        className={activeIndex === 6 ? `${styles.active}` : ''}
        onClick={() => handleItemClick(6)}
      >
        <a href="#">
          <Crown />
          assinatura
        </a>
      </li>
    </ul>
  );
}

export default UlMenu;
