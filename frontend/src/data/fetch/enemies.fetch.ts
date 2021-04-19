import axios, { AxiosResponse } from "axios";
import { EnemyDTO } from "../../interfaces/types";

require("dotenv").config();

export const fetchEnemies = async (): Promise<EnemyDTO[] | Error> => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  return axios
    .get(`${API}planes/enemies`)
    .then((res: AxiosResponse<any>) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
