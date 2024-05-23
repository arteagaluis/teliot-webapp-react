import React from 'react';
import styles from './styles.module.scss';
import useLogin from './useLogin';
import Input from '../Input/index.jsx';
import Button from '../Button/index.jsx';
import ToggleSwitch from '../ToggleSwitch';

const Login = () => {
  const { handleChange, form, handleSubmit } = useLogin();
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div>
            <Input
              name={'email'}
              placeholder={'Email'}
              onChange={handleChange}
              type={'email'}
              icon={'img/icon/mail-icon.svg'}
              value={form.email}
            />

            <Input
              name={'password'}
              placeholder={'Password'}
              onChange={handleChange}
              type={'password'}
              icon={'img/icon/lock-icon.svg'}
              value={form.password}
            />
          </div>
          <ToggleSwitch
            onClick={() => {
              console.log('asdasd');
            }}
          />

          <Button name={'Enviar'} type={'submit'} />
        </div>
      </form>
    </>
  );
};

export default Login;
