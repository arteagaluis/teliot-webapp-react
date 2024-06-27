import fecthService from '@/util/FecthService.js';

export const servicioRegitroUsuarios = async (datos) => {
  console.log(process.env.NEXT_PUBLIC_SRV_REGISTER);
  try {
    const data = await fecthService({
      url: process.env.NEXT_PUBLIC_SRV_REGISTER,
      // url: 'http://backend:3001/api/register',
      // url: 'http://18.231.243.156:4000/api/register',
      method: 'POST',
      data: {
        email: datos.email,
        password: datos.password,
        username: datos.fullName,
      },
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    return Promise.reject(error);
  }
};
