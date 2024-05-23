import axios from 'axios';

const fecthService = async ({
  url,
  method = 'GET',
  data = {},
  headers = {},
  params = {},
}) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
      params,
    });

    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    // Manejo de errores
    if (error.response) {
      // La solicitud se realizó y el servidor respondió con un estado de error
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      // La solicitud se realizó pero no se recibió respuesta
      console.error('Error request data:', error.request);
    } else {
      // Algo sucedió al configurar la solicitud que provocó un error
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export default fecthService;
