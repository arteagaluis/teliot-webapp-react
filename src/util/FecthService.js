import axios from '../util/axios.js';

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
    const { status, data: dataSrv } = response;

    return { status, dataSrv };
  } catch (error) {
    throw error;
  }
};

export default fecthService;
