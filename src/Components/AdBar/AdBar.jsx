//React
import React from 'react';
// //Styles
import styles from './AdBar.module.scss';
//Imagens
import ShieldCheck from '../../Assests/ShieldCheck';
import Truck from '../../Assests/Truck';
import CreditCard from '../../Assests/CreditCard';

const AdBar = () => {
  return (
    <div className={styles.containerAdbar}>
      <div className={styles.block}>
        <ShieldCheck />
        <p>
          Compra <span>100% segura</span>
        </p>
      </div>
      <div className={styles.block}>
        <Truck />
        <p>
          Frete grátis <span>acima de R$ 200</span>
        </p>
      </div>
      <div className={styles.block}>
        <CreditCard />
        <p>
          Parcele <span>suas compras</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default AdBar;
