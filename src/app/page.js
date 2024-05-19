'use client';
import BarraProgreso from '@/components/barraProgreso';
import styles from './styles.module.scss';
import Input from '@/components/Input';
import Register from '@/components/Register';

export default function Home() {
  const onChange = (e) => {
    console.log(e.target.name);
  };

  const onBlur = (e) => {
    console.log(e);
  };

  const onFocus = (e) => {
    console.log(e);
  };

  return <Register />;
}
