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

    const passFailData = await api.get(
      `data/daily-survey-status-line-by-location${querystring}`
    );
    const tempData = await api.get(
      `/data/employee-temp-by-location${querystring}`
    );
    const res = {
      passFailData: passFailData.data,
      tempData: tempData.data,
    };
    dispatch({
      type: actions.DATA_LOADED,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};
