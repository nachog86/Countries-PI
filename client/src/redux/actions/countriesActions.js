import axios from 'axios';

export const GET_ALL_COUNTRIES_START = 'GET_ALL_COUNTRIES_START';
export const GET_ALL_COUNTRIES_SUCCESS = 'GET_ALL_COUNTRIES_SUCCESS';
export const GET_ALL_COUNTRIES_ERROR = 'GET_ALL_COUNTRIES_ERROR';

export const getAllCountries = () => async (dispatch) => {
  dispatch({ type: GET_ALL_COUNTRIES_START });

  try {
    const response = await axios.get('http://localhost:3001/countries');

    dispatch({
      type: GET_ALL_COUNTRIES_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COUNTRIES_ERROR,
      payload: error.message
    });
  }
};
