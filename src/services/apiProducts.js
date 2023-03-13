import axios from 'axios';

export const backend = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

export const getProductInfo = async () => {
  const options = {
    apiKey: 'cf9c8c5c2dde5d5de16afa57c07f933d',
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: '20400048799000',
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

export const getOficeInfo = async () => {
  const options = {
    apiKey: 'fcad54a446f54015e23edf4c93e5b3a4',
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: 'запоріжжя',
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
