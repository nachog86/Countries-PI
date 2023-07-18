import { GET_ALL_COUNTRIES_START, GET_ALL_COUNTRIES_SUCCESS, GET_ALL_COUNTRIES_ERROR } from '../actions/countriesActions';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case GET_ALL_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;

  