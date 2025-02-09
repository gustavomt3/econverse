//React
import React from 'react';
//Styles
import styles from './Button.module.scss';

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
