import Input from '../Input/index';
import { useRegister } from './useRegister';
import styles from './styles.module.scss';
import Button from '../Button';

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
          icon={'img/icon/user-icon.svg'}
          value={form.fullName}
          className={styles.input}
        />

        <Input
          name={'email'}
          placeholder={'Email'}
          onChange={handleChange}
          type={'email'}
          icon={'img/icon/mail-icon.svg'}
          value={form.email}
          className={styles.input}
        />

        <Input
          name={'password'}
          placeholder={'Password'}
          onChange={handleChange}
          type={'password'}
          icon={'img/icon/lock-icon.svg'}
          value={form.password}
          className={styles.input}
        />

        <div className={styles.container_btn}>
          <Button name={'Enviar'} type={'submit'} />
        </div>
      </form>
    </>
  );
};

export default Register;
