import axios from 'axios';

export const CREATE_ACTIVITY_START = 'CREATE_ACTIVITY_START';
export const CREATE_ACTIVITY_SUCCESS = 'CREATE_ACTIVITY_SUCCESS';
export const CREATE_ACTIVITY_ERROR = 'CREATE_ACTIVITY_ERROR';

export const createActivity = (activityData) => async (dispatch) => {
  dispatch({ type: CREATE_ACTIVITY_START });

  try {
    const response = await axios.post('/activities', activityData);

    dispatch({
      type: CREATE_ACTIVITY_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: CREATE_ACTIVITY_ERROR,
      payload: error.message
    });
  }
};
