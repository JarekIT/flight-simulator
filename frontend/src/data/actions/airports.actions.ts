import { Dispatch } from '../../interfaces/store';
import { fetchAirports } from '../fetch/airports.fetch';
import { AirportDTO } from '../../interfaces/types';

export const loadAirports = async (dispatch: Dispatch): Promise<void> => {
  const data: AirportDTO[] | Error = await fetchAirports();

  if (data instanceof Error) {
    dispatch({
      type: 'AIRPORTS_GET_FAILURE',
      payload: data
    });
  } else {
    dispatch({
      type: 'AIRPORTS_GET_SUCCESS',
      payload: data
    });
  }
};
