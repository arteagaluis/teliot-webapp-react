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
    } catch (error) {
      setForm({
        fullName: '',
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
    register();
  };

  return {
    handleChange,
    form,
    handleSubmit,
  };
};
