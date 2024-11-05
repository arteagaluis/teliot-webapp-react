import mqtt from 'mqtt';

export function connectToBroker() {
  const client = mqtt.connect('wss://iot-test.online:8083/mqtt'); // Reemplaza con la URL de tu broker

  client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    client.subscribe('testtopic/temperatura', (err) => {
      if (!err) {
        console.log('Suscripción exitosa al topic');
      } else {
        console.error('Error al suscribirse:', err);
      }
    });
  });

  client.on('message', (topic, message) => {
    console.log(`Mensaje recibido en ${topic}: ${message.toString()}`);
  });

  client.on('error', (err) => {
    console.error('Error de conexión:', err);
  });

  return client;
}
