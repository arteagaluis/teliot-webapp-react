import { useState } from 'react';
import { servicioLoginUsuarios } from './services';

const useLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const data = await servicioLoginUsuarios(form);
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
    console.log('submit');
  };

  return {
    handleChange,
    form,
    handleSubmit,
  };
};

export default useLogin;
