import React from 'react';

import useHome from './useHome.js';
import styles from './styles.module.scss';
import Image from 'next/image.js';
import add from '../../../public/img/icon/icon-add.svg';

const Home = () => {
  const { stateHome, handleAddDevice } = useHome();

  return (
    <>
      {stateHome.hasDevice ? (
        <>
          <div className={styles.header__device}>
            <h2>Home</h2>
            <div className={styles.container__add} onClick={handleAddDevice}>
              <Image alt="icon add" src={add} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.header}>Home</h2>
          <div className={styles.container}>
            <div className={styles.container__add} onClick={handleAddDevice}>
              <Image alt="icon add" src={add} />
              <p className={styles.texto__add}>Agregar dispositivo</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
