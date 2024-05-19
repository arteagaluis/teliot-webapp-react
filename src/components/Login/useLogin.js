import { useState } from 'react';

const useLogin = () => {
  const [form, setForm] = useState({
    email: '',
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

export default useLogin;
