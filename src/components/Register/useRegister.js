import { useState } from 'react';
import { servicioRegitroUsuarios } from './service.js';

export const useRegister = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const register = async () => {
    try {
      const data = await servicioRegitroUsuarios(form);
      console.log(data);
    } catch (error) {
      setForm({
        fullName: '',
        email: '',
        password: '',
      });
      console.log(error);
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
    register();
    console.log('submit');
  };

  return {
    handleChange,
    form,
    handleSubmit,
  };
};
