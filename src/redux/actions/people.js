// Action Types
import * as actions from './types';

// Import pre-configured API
import api from '../../utils/api';

// GET PEOPLE
export const getPeople = (city = '') => async (dispatch) => {
  try {
    // Send Message: PEOPLE_LOADING
    dispatch({
      type: actions.PEOPLE_LOADING,
    });

    let querystring = '';

    // Set querystring if city was provided
    if (city !== '') {
      querystring = `?city=${city}`;
    }

    // Send GET request to /people endpoint
    const res = await api.get(`/person${querystring}`);

    // Send Message: PEOPLE_LOADED
    dispatch({
      type: actions.PEOPLE_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
