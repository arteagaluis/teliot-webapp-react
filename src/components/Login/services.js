import fecthService from '@/util/FecthService.js';

export const servicioLoginUsuarios = async (datos) => {
  console.log(process.env.NEXT_PUBLIC_SRV_LOGIN);
  try {
    const data = await fecthService({
      url: process.env.NEXT_PUBLIC_SRV_LOGIN,

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
