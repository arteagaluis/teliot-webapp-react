import React from 'react';
import styles from './styles.module.scss';

const BarraProgreso = ({ value }) => {
  let temp = (180 * value) / 150;

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.barra_temp}
          style={{ transform: `rotate(${temp}deg)` }}
        >
          <div className={styles.cont1}></div>
          <div className={styles.cont2}></div>
        </div>

        <div className={styles.circulo_centro}></div>
        <div className={styles.rectangulo}></div>
        <span className={styles.texto}>{`${value}°C` || '0.0 °C'} </span>
      </div>
    </>
  );
};

export default BarraProgreso;
