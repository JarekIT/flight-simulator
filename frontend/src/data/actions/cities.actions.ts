import { Dispatch } from "../../interfaces/store";
import { fetchCities } from "../fetch/cities.fetch";
import { CityDTO } from "../../interfaces/types";

export const loadCities = async (dispatch: Dispatch): Promise<void> => {
  let data: CityDTO[] | Error = await fetchCities();

  if (data instanceof Error) {
    dispatch({
      type: "CITIES_GET_FAILURE",
      payload: data,
    });
  } else {
    dispatch({
      type: "CITIES_GET_SUCCESS",
      payload: data,
    });
  }
};
