import axios, { AxiosResponse } from "axios";
import { CityDTO } from "../../interfaces/types";

require("dotenv").config();

export const fetchCities = async (): Promise<CityDTO[] | Error> => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  return axios
    .get(`${API}cities`)
    .then((res: AxiosResponse<any>) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
