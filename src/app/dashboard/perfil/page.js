'use client';

import React from 'react';
import fecthService from '@/util/FecthService.js';
import { useRouter } from 'next/navigation';

const Pefil = () => {
  const router = useRouter();
  const servicioLogoutUsuarios = async () => {
    try {
      const data = await fecthService({
        url: process.env.NEXT_PUBLIC_SRV_LOGOUT,

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logoutUser = async () => {
    try {
      const { status } = await servicioLogoutUsuarios();
      if (status === 200) {
        return router.push('/login');
      }
    } catch (error) {}
  };

  return (
    <>
      <div>Pefil</div>
      <button onClick={logoutUser}>Logout</button>
    </>
  );
};

export default Pefil;
