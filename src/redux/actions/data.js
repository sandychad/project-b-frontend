// Action Types
import * as actions from './types';

// Helper functions
import { today } from '../../utils/today';
import api from '../../utils/api';

// GET DATA
export const getData = () => async (dispatch) => {
  try {
    // Send Message: DATA LOADING
    dispatch({
      type: actions.DATA_LOADING,
    });

    const todaysDate = today();

    let querystring = `?date=${todaysDate}`;

    const res = await api.get(`/data/survey-by-location${querystring}`);

    dispatch({
      type: actions.DATA_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
