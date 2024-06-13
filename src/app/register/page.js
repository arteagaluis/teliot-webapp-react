'use client';
import React from 'react';
import RegisterComponent from '../../components/Register/index.jsx';
import Image from 'next/image.js';
import styles from './styles.module.scss';
import logo from '../../../public/img/logo.svg';

const Register = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.container_image}>
            <Image src={logo} alt="Picture of the author" />
          </div>
          <RegisterComponent />
        </div>
      </div>
    </>
  );
};

export default Register;
