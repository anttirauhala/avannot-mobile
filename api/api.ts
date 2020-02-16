import axios from 'axios';
import {IceHole} from 'models/iceHole';

const apiKey = ''; // TODO: get API key from .env file
const iceHolesUrl =
  'https://51zfnyhbyh.execute-api.us-east-1.amazonaws.com/default/avannot';

const getIceHoles = (): Promise<IceHole[]> => {
  return axios
    .get(iceHolesUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    })
    .then(res => res.data.iceHoles)
    .catch(() => {
      console.log('Fetching ice holes failed.');
      return [];
    });
};

export {getIceHoles};
