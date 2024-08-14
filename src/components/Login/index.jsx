import React from 'react';
import styles from './styles.module.scss';
import useLogin from './useLogin';
import Input from '../Input/index.jsx';
import Button from '../Button/index.jsx';
import ToggleSwitch from '../ToggleSwitch';
import Link from 'next/link';

import email from '../../../public/img/icon/icon-email.svg';
import password from '../../../public/img/icon/icon-password.svg';

const Login = () => {
  const { handleChange, form, handleSubmit } = useLogin();
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name={'email'}
          placeholder={'Email'}
          onChange={handleChange}
          type={'email'}
          icon={email}
          value={form.email}
          className={styles.input}
        />

        <Input
          name={'password'}
          placeholder={'Password'}
          onChange={handleChange}
          type={'password'}
          icon={password}
          value={form.password}
          className={styles.input}
        />

        <div className={styles.container_btn}>
          <Button name={'Inicia sesion'} type={'submit'} />
        </div>

        <p className={styles.text_redirect_login}>
          ¿No tienes cuenta? <Link href="/register">Registrate</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
