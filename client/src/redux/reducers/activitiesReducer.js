import {
  CREATE_ACTIVITY_START,
  CREATE_ACTIVITY_SUCCESS,
  CREATE_ACTIVITY_FAIL,
  GET_ALL_ACTIVITIES_SUCCESS,
  GET_ALL_ACTIVITIES_FAIL
} from '../actions/activitiesActions';

const initialState = {
  activities: [],
  creating: false,
  error: null,
};

export const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY_START:
      return {
        ...state,
        creating: true,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        creating: false,
      };
    case CREATE_ACTIVITY_FAIL:
      return {
        ...state,
        creating: false,
        error: action.payload,
      };
    case GET_ALL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ALL_ACTIVITIES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
