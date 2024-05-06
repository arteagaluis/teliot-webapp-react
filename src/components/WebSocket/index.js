'use client';

import { useEffect } from 'react';

const WebSocketClient = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4040');

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
      // Aquí puedes enviar mensajes al servidor si es necesario
    };

    socket.onmessage = (message) => {
      console.log('Received from server: ', message.data);
      // Aquí puedes manejar los mensajes recibidos del servidor
    };

    return () => {
      socket.close();
    };
  }, []);

  return <div>WebSocket Client</div>;
};

export default WebSocketClient;
