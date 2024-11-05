'use client';
import { connectToBroker } from '@/util/mqttClient';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const client = connectToBroker();

    client.on('message', (topic, message) => {
      const mensajeRecibido = message.toString();
      setMensaje(mensajeRecibido); // Actualiza el estado con el mensaje recibido
    });

    // Limpia la conexión cuando el componente se desmonta
    return () => {
      client.end(); // Cierra la conexión al desmontar el componente
    };
  }, []);

  return (
    <>
      <div>HomePage</div>
      <h2>Suscriptor MQTT</h2>
      <p>temperatura: {mensaje} </p>
    </>
  );
};

export default HomePage;
