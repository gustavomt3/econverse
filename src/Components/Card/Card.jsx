//React
import React from 'react';
//Components
import Button from '../Button/Button';
//Styles
import styles from './Card.module.scss';

const Card = ({ data, setModalCard }) => {
  //Consts
  const priceValorReais = data.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const maxPrice = data.price + 100;
  const maxPriceValorReais = maxPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const dividedPrice = data.price / 2;
  const dividedPriceValorReais = dividedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className={styles.containerCard} onClick={() => setModalCard(data)}>
      <img src={data.photo} alt={`${data.productName}`} />
      <p className={styles.description}>{data.productName}</p>
      <span className={styles.maxprice}>{maxPriceValorReais}</span>
      <span className={styles.price}>{priceValorReais}</span>
      <span className={styles.dividedPrice}>
        ou 2x de {dividedPriceValorReais} sem juros
      </span>
      <span className={styles.shipping}>Frete grátis</span>
      <Button text="comprar" />
    </div>
  );
};

export default Card;
