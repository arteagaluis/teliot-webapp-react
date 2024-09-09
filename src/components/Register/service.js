import fecthService from '@/util/FecthService.js';

export const servicioRegitroUsuarios = async (datos) => {
  console.log(process.env.NEXT_PUBLIC_SRV_REGISTER);
  try {
    const data = await fecthService({
      url: process.env.NEXT_PUBLIC_SRV_REGISTER,

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

export const servicioVerificarEmail = async (token) => {
  try {
    const data = await fecthService({
      url: process.env.NEXT_PUBLIC_SRV_VERIFY_EMAIL,
      method: 'GET',
      params: { token },
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    return Promise.reject(error);
  }
};
