'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import fecthService from '@/util/FecthService';

const Menu = () => {
  const router = useRouter();

  const servicioProfile = async () => {
    try {
      const data = await fecthService({
        url: process.env.NEXT_PUBLIC_SRV_PROFILE,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const profile = async () => {
    try {
      const { status } = await servicioProfile();
    } catch (error) {
      return router.push('/login');
    }
  };

  useEffect(() => {
    profile();
  }, []);

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
