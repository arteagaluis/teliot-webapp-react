'use client';

import Register from '@/components/Register';
import Login from '@/components/Login';
import ToggleSwitch from '@/components/ToggleSwitch';
import LayoutInit from '@/components/ToggleSwitch/LayoutInit';
import styles from './styles.module.scss';
import Image from 'next/image';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    return router.push('/login');
  }, []);
}
