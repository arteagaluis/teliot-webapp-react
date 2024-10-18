'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Menu = () => {
  return (
    <nav className={styles.container}>
      <Link href={'/dashboard/notification'}>
        <div className={styles.container__icon}>
          <Image
            src={'/img/icon/icon-notification.svg'}
            width={24}
            height={24}
            alt="icon-notification"
          />
          <span className={styles.texto}>Notificaciones</span>
        </div>
      </Link>
      <Link href={'/dashboard/home'}>
        <div className={styles.container__icon}>
          <Image
            src={'/img/icon/icon-home.svg'}
            width={24}
            height={24}
            alt="icon-home"
          />
          <span className={styles.texto}>Home</span>
        </div>
      </Link>
      <Link href={'/dashboard/perfil'}>
        <div className={styles.container__icon}>
          <Image
            src={'/img/icon/icon-perfil.svg'}
            width={24}
            height={24}
            alt="icon-perfil"
          />
          <span className={styles.texto}>Pefil</span>
        </div>
      </Link>
    </nav>
  );
};

export default Menu;
