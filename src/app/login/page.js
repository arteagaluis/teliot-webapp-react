'use client';

import React from 'react';

import LoginComponent from '../../components/Login/index.jsx';
import Image from 'next/image';
import logo from '../../../public/img/logo.svg';
import styles from './styles.module.scss';

const Login = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.container_image}>
            <Image src={logo} alt="Picture of the author" />
          </div>
          <LoginComponent />
        </div>
      </div>
    </>
  );
};

export default Login;
