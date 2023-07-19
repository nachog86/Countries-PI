import api from '../../services/api';

export const CREATE_ACTIVITY_START = 'CREATE_ACTIVITY_START';
export const CREATE_ACTIVITY_SUCCESS = 'CREATE_ACTIVITY_SUCCESS';
export const CREATE_ACTIVITY_FAIL = 'CREATE_ACTIVITY_FAIL';
export const GET_ALL_ACTIVITIES_SUCCESS = 'GET_ALL_ACTIVITIES_SUCCESS';
export const GET_ALL_ACTIVITIES_FAIL = 'GET_ALL_ACTIVITIES_FAIL';

export const createActivity = (activityData) => async (dispatch) => {
  dispatch({ type: CREATE_ACTIVITY_START });
  try {
    await api.post('/activities', activityData);
    dispatch({ type: CREATE_ACTIVITY_SUCCESS });
  } catch (error) {
    dispatch({ type: CREATE_ACTIVITY_FAIL, payload: error.response.data });
  }
};

export const getAllActivities = () => async (dispatch) => {
  try {
    const response = await api.get('/activities');
    dispatch({ type: GET_ALL_ACTIVITIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_ACTIVITIES_FAIL, payload: error.response.data });
  }
};
