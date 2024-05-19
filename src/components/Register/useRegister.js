import { useState } from 'react';

export const useRegister = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    num: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return {
    handleChange,
    form,
    handleSubmit,
  };
};
