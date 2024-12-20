import { useContext, useState } from 'react';
import { servicioLoginUsuarios } from './services';
import { useRouter } from 'next/navigation';
import UsuarioContext from '@/context/usuarioContext';
import { ACCIONES_USUARIO } from '@/reducer/usuarioReducer';

const useLogin = () => {
  const { dispatch } = useContext(UsuarioContext);
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const data = await servicioLoginUsuarios(form);

      if (data.status === 200) {
        dispatch({
          type: ACCIONES_USUARIO.ACTUALIZAR_USUARIO,
          payload: { correo: form.email, nombre: data.dataSrv.username },
        });
        return router.push('/dashboard/home');
      }
    } catch (error) {
      setForm({
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return {
    handleChange,
    form,
    handleSubmit,
  };
};

export default useLogin;
