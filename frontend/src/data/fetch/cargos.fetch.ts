import axios, { AxiosResponse } from 'axios';
import { CargoDTO } from '../../interfaces/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const fetchCargos = async (): Promise<CargoDTO[] | Error> => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  return axios
    .get(`${API}planes/cargos`)
    .then((res: AxiosResponse<CargoDTO[]>) => {
      return res.data;
    })
    .catch((error: Error) => {
      console.error(error);
      return error;
    });
};
