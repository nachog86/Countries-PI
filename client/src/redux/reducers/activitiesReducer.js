import { CREATE_ACTIVITY_START, CREATE_ACTIVITY_SUCCESS, CREATE_ACTIVITY_ERROR } from '../actions/activitiesActions';

const initialState = {
  activity: [],
  loading: false,
  error: null,
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTIVITY_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        activity: action.payload,
      };
    case CREATE_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default activitiesReducer;
