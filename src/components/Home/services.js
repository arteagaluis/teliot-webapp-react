import fecthService from '@/util/FecthService.js';

export const servicioProfile = async () => {
  try {
    const data = await fecthService({
      url: process.env.NEXT_PUBLIC_SRV_PROFILE,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const servicioListDevice = async (email) => {
  try {
    const data = await fecthService({
      url: `${process.env.NEXT_PUBLIC_END_POINT_BASE}/${email}/devices`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
