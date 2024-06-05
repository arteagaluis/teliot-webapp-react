import React from 'react';
import styles from './styles.module.scss';
import ToggleSwitch from '../../ToggleSwitch/index.jsx';

const LayoutInit = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_log_reg}>{children}</div>
      </div>
    </>
  );
};

export default LayoutInit;
