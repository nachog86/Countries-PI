import { combineReducers } from 'redux';
import { activitiesReducer } from './activitiesReducer';
import { countriesReducer } from './countriesReducer';

export default combineReducers({
  activities: activitiesReducer,
  countries: countriesReducer,
});
