import fecthService from '@/util/FecthService.js';

export const servicioLoginUsuarios = async (datos) => {
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
    return Promise.reject(error);
  }
};
