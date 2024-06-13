import Input from '../Input/index';
import { useRegister } from './useRegister';
import styles from './styles.module.scss';
import Button from '../Button';
import user from '../../../public/img/icon/icon-user.svg';
import email from '../../../public/img/icon/icon-email.svg';
import password from '../../../public/img/icon/icon-password.svg';
import Link from 'next/link';

const Register = () => {
  const { handleChange, form, handleSubmit } = useRegister();

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name={'fullName'}
          placeholder={'Nombre completo'}
          onChange={handleChange}
          type={'text'}
          icon={user}
          value={form.fullName}
          className={styles.input}
        />

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
          <Button name={'Regístrate'} type={'submit'} />
        </div>
        <p className={styles.text_redirect_login}>
          ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
