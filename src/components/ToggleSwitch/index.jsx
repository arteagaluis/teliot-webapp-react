import React from 'react';
import styles from './styles.module.scss';

const ToggleSwitch = ({ onClick = () => {} }) => {
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" onClick={onClick} />
        <span className={styles.slider}></span>
      </label>

      <label className={styles.switch}>
        <input type="checkbox" onClick={onClick} />
        <span className={styles.slider_round}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
