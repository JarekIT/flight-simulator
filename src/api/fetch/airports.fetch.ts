import axios, { AxiosResponse } from 'axios';

export async function fetchCities(): Promise<any> {
  return await axios
    .get('../db/airports.json')
    .then((res: AxiosResponse<any>) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
}
