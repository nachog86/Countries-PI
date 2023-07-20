import axios from 'axios';
import api from '../../services/api';

export const GET_ALL_COUNTRIES_START = 'GET_ALL_COUNTRIES_START';
export const GET_ALL_COUNTRIES_SUCCESS = 'GET_ALL_COUNTRIES_SUCCESS';
export const GET_ALL_COUNTRIES_FAIL = 'GET_ALL_COUNTRIES_FAIL';
export const GET_COUNTRY_BY_ID_SUCCESS = 'GET_COUNTRY_BY_ID_SUCCESS';
export const GET_COUNTRY_BY_ID_FAIL = 'GET_COUNTRY_BY_ID_FAIL';
export const GET_COUNTRIES_BY_NAME_SUCCESS = 'GET_COUNTRIES_BY_NAME_SUCCESS';
export const GET_COUNTRIES_BY_NAME_FAIL = 'GET_COUNTRIES_BY_NAME_FAIL';

export const getAllCountries = () => async (dispatch) => {
  dispatch({ type: GET_ALL_COUNTRIES_START });
  try {
    const response = await axios.get(`http://localhost:3001/countries`);
    dispatch({ type: GET_ALL_COUNTRIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_COUNTRIES_FAIL, payload: error.response.data });
  }
};

export const getCountryById = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://localhost:3001/countries/id${id}`);
    dispatch({ type: GET_COUNTRY_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_COUNTRY_BY_ID_FAIL, payload: error.data });
  }
};

export const getCountriesByName = (name) => async (dispatch) => {
  try {
    const response = await api.get(`/countries/name?name=${name}`);
    dispatch({ type: GET_COUNTRIES_BY_NAME_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COUNTRIES_BY_NAME_FAIL, payload: error.response.data });
  }
};
