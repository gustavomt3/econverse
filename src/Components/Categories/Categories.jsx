//React
import React from 'react';
//Data Request
import { dataImagesCategories } from '../../Data/dataRequest';
//Styles
import styles from './Categories.module.scss';

function Categories() {
  //Component
  function CategoryItem({ item, isActive, onClick }) {
    const activeClass = isActive ? styles.active : '';

    return (
      <li onClick={onClick} className={activeClass}>
        <div>{item.img}</div>
        <span>{item.name}</span>
      </li>
    );
  }
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleCategoryClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <nav className={`${styles.container} ${styles.containerGeneral}`}>
      <ul className={styles.ulCategories}>
        {dataImagesCategories.map((item, index) => (
          <CategoryItem
            key={index}
            item={item}
            isActive={index === activeIndex}
            onClick={() => handleCategoryClick(index)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
