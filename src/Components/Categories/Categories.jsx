//React
import React from 'react';
//Data Request
import { dataImagesCategories } from '../../Data/categoriesRequest';
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
    <section className={styles.containerGeneral}>
      <nav className={styles.container}>
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
    </section>
  );
}

export default Categories;
