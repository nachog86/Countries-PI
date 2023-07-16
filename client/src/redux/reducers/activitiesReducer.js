const initialState = {
    activities: [],
    loading: false,
    error: null,
  };
  
  function activitiesReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_ACTIVITIES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_ACTIVITIES_SUCCESS':
        return { ...state, loading: false, activities: action.payload };
      case 'FETCH_ACTIVITIES_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  }
  
  export default activitiesReducer;