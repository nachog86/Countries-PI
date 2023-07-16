import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import activitiesReducer from './activitiesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  activities: activitiesReducer,
});

export default rootReducer;