import axios, { AxiosResponse } from 'axios';
import { AirportDTO } from '../../interfaces/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const fetchAirports = async (): Promise<AirportDTO[] | Error> => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  return axios
    .get(`${API}airports`)
    .then((res: AxiosResponse<AirportDTO[]>) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
