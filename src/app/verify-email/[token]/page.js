'use client';

import Button from '@/components/Button';
import { servicioVerificarEmail } from '@/components/Register/service';
import { useRouter } from 'next/navigation';

const VerifyEmail = ({ params }) => {
  const { token } = params;
  const router = useRouter();

  const validarEmail = async () => {
    try {
      const data = await servicioVerificarEmail(token);
      const { status } = data;

      if (status === 200) {
        return router.push('/login');
      }
    } catch (error) {
      const { response } = error;
      console.log(response.status);
    }
  };

  return (
    <>
      <div>Valida tu email </div>

      <Button name={'validar email'} onClick={validarEmail} />
    </>
  );
};

export default VerifyEmail;
