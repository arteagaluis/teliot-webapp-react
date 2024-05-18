'use client';
import BarraProgreso from '@/components/barraProgreso';
import styles from './styles.module.scss';
import Input from '@/components/Input';

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

  return (
    <main>
      <h1 className={styles.container}>HOLA</h1>
      <BarraProgreso value={'50'} />
      <form>
        <Input
          name={'email'}
          placeholder={'Ingresa un email valido'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type={'email'}
          icon={'img/icon/mail-icon.svg'}
        />

        {/* <Input
          placeholder={'Password'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type={'password'}
          icon={'img/icon/lock-icon.svg'}
        />

        <Input
          placeholder={'Password'}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type={'text'}
          icon={'img/icon/user-icon.svg'}
        /> */}

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
