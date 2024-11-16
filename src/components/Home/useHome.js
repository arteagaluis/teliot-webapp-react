import { useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import { servicioListDevice, servicioProfile } from './services';
import { connectToBroker } from '@/util/mqttClient';
import UsuarioContext from '@/context/usuarioContext';

const useHome = () => {
  const { usuario } = useContext(UsuarioContext);

  const router = useRouter();
  const isProfileCalled = useRef(false);
  const [stateHome, setStateHome] = useState({
    mensaje: '',
    hasDevice: false,
  });

  const handleAddDevice = () => {
    console.log('agregar dispositivos');
  };

  const profile = async () => {
    if (isProfileCalled.current) return; // Evita múltiples llamadas
    isProfileCalled.current = true; // Marca que ya se ejecutó

    try {
      const { status } = await servicioProfile();

      status === 200 ? listDevice() : null;
    } catch (error) {
      return router.push('/login');
    }
  };

  const listDevice = async () => {
    const { correo } = usuario;
    try {
      const { dataSrv } = await servicioListDevice(correo);

      dataSrv.length > 0
        ? setStateHome((prevState) => ({ ...prevState, hasDevice: true }))
        : setStateHome((prevState) => ({ ...prevState, hasDevice: false }));
    } catch (error) {}
  };

  useEffect(() => {
    profile();
  }, []);

  useEffect(() => {
    const client = connectToBroker();

    client.on('message', (topic, message) => {
      const mensajeRecibido = message.toString();

      setStateHome((prevState) => ({
        ...prevState,
        mensaje: mensajeRecibido, // Actualiza el estado con el mensaje recibido
      }));
      //   setMensaje(mensajeRecibido); // Actualiza el estado con el mensaje recibido
    });

    // Limpia la conexión cuando el componente se desmonta
    return () => {
      client.end(); // Cierra la conexión al desmontar el componente
    };
  }, []);

  return {
    stateHome,
    handleAddDevice,
  };
};

export default useHome;
