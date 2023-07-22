import {
  GET_ALL_COUNTRIES_START,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_COUNTRY_BY_ID_SUCCESS,
  GET_COUNTRY_BY_ID_FAIL,
  GET_COUNTRIES_BY_NAME_SUCCESS,
  GET_COUNTRIES_BY_NAME_FAIL
} from '../actions/countriesActions';

const initialState = {
  countries: [],
  searchedCountries: [],
  selectedCountry: null,
  error: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_START:
      return {
        ...state,
      };
    case GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        searchedCountries: action.payload,
      };
    case GET_ALL_COUNTRIES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_COUNTRY_BY_ID_SUCCESS:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case GET_COUNTRY_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_COUNTRIES_BY_NAME_SUCCESS:
      return {
        ...state,
        searchedCountries: action.payload,
      };
    case GET_COUNTRIES_BY_NAME_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


  