import axios, { AxiosResponse } from "axios";
import { AirportDTO } from "../../interfaces/types";

require("dotenv").config();

export const fetchAirports = async (): Promise<AirportDTO[] | Error> => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  return axios
    .get(`${API}airports`)
    .then((res: AxiosResponse<any>) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
