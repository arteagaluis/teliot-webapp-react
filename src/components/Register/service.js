import fecthService from '@/util/FecthService.js';

export const servicioRegitroUsuarios = async (datos) => {
  try {
    const data = await fecthService({
      // url: 'http://backend:3001/api/register',
      url: 'http://localhost:4000/api/register',
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
