// Action Types
import * as actions from './types';

// Helper Functions
import api from '../../utils/api';
import { getDateString } from '../../utils/today';

// GET PEOPLE
export const getPeople = (city = '') => async (dispatch) => {
  try {
    // Send Message: PEOPLE_LOADING
    dispatch({
      type: actions.PEOPLE_LOADING,
    });

    const todaysDate = getDateString();

    let querystring = `?date=${todaysDate}`;

    // Set querystring if city was provided
    if (city !== '') {
      querystring += `&city=${city}`;

      // Send GET request to /people endpoint
      const res = await api.get(`/person${querystring}`);

      // Send Message: PEOPLE_LOADED
      dispatch({
        type: actions.PEOPLE_LOADED,
        payload: res.data,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// SET CITY
export const setCity = (city) => (dispatch) => {
  dispatch({
    type: actions.SET_CITY,
    payload: city,
  });
};

// CLEAR CITY
export const clearCityAndPeople = () => (dispatch) => {
  dispatch({
    type: actions.CLEAR_CITY_AND_PEOPLE,
  });
};
