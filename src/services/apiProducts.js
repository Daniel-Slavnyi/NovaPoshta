import axios from 'axios';

export const backend = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

export const getProductInfo = async ttn => {
  const options = {
    apiKey: 'cf9c8c5c2dde5d5de16afa57c07f933d',
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: `${ttn}`,
        },
      ],
    },
  };

  try {
    const { data } = await backend.post('', options);
    return data;
  } catch (error) {
    return error;
  }
};

export const getOficeInfo = async city => {
  const options = {
    apiKey: 'fcad54a446f54015e23edf4c93e5b3a4',
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: `${city}`,
      Limit: '20',
      Page: '1',
      Language: 'UA',
    },
  };
  try {
    const { data } = await backend.post('', options);
    return data;
  } catch (error) {
    return error;
  }
};

export const getOficeListInfo = async (city, num = 1) => {
  const options = {
    apiKey: 'fcad54a446f54015e23edf4c93e5b3a4',
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: `${city}`,
      Limit: '20',
      Page: `${num}`,
      Language: 'UA',
    },
  };
  try {
    const { data } = await backend.post('', options);
    return data;
  } catch (error) {
    return error;
  }
};
