//React
import React from 'react';
//Context
import { GlobalContext } from '../../Contexts/GlobalContext';
//Styles
import styles from './CardModal.module.scss';

function CardModal({ data }) {
  //Context
  const { setModalCard } = React.useContext(GlobalContext);
  //Consts
  const priceValorReais = data.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  //Functions
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalCard(null);
    }
  }
  return (
    <>
      {data && (
        <div
          className={styles.containerGeralModal}
          onClick={handleOutsideClick}
        >
          <div className={styles.containerModal}>
            <span className={styles.exit} onClick={handleOutsideClick}>
              x
            </span>
            <div className={styles.image}>
              <img src={data.photo} alt={data.productName} />
            </div>
            <div className={styles.infos}>
              <h2>{data.productName}</h2>
              <span>{priceValorReais}</span>
              <p>{data.descriptionShort}</p>
              <a href="#">Veja mais detlalhes do produto {'>'}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardModal;
