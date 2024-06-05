'use client';

import Register from '@/components/Register';
import Login from '@/components/Login';
import ToggleSwitch from '@/components/ToggleSwitch';
import LayoutInit from '@/components/ToggleSwitch/LayoutInit';
import styles from './styles.module.scss';
import Image from 'next/image';
import Input from '@/components/Input';

export default function Home() {
  return (
    <>
      <LayoutInit>
        <Image
          src="/img/logo.svg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <Register />
      </LayoutInit>

      <Input
        name={'fullName'}
        placeholder={'Nombre completo'}
        // onChange={handleChange}
        type={'text'}
        // icon={'img/icon/user-icon.svg'}
        // value={form.fullName}
        className={styles.input}
      />
    </>
  );
}
