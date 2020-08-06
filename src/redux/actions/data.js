// Action Types
import * as actions from './types';

// Helper functions
import { getDateString } from '../../utils/today';
import api from '../../utils/api';

// SET DATE
export const setDate = (date) => (dispatch) => {
  // Process date
  date = getDateString(date);

  // Send Message: SET DATE
  dispatch({
    type: actions.SET_DATE,
    payload: date,
  });
};

// GET DATA
export const getData = (date = getDateString()) => async (dispatch) => {
  try {
    // Send Message: DATA LOADING
    dispatch({
      type: actions.DATA_LOADING,
    });

    let querystring = `?date=${date}`;

    const avgTempByLocation = await api.get(
      `data/average-temp-by-location${querystring}`
    );

    const dailySurveyStatusByLocation = await api.get(
      `data/daily-survey-status-by-location${querystring}`
    );

    const dailySurveyStatusLineByLocation = await api.get(
      `data/daily-survey-status-line-by-location${querystring}`
    );

    const employeeTempByLocation = await api.get(
      `/data/employee-temp-by-location${querystring}`
    );

    const failedSurveyCountByDate = await api.get(
      `/data/failed-survey-count-by-date${querystring}`
    );

    // Trend endpoints not currently in use
    // const weeklySurveyCountByLocation = await api.get(
    //   `/data/weekly-survey-count-by-location${querystring}`
    // );

    // const weeklyTempTrendByLocation = await api.get(
    //   `/data/weekly-temp-trend-by-location${querystring}`
    // );

    const res = {
      avgTempByLocation: avgTempByLocation.data,
      dailySurveyStatusByLocation: dailySurveyStatusByLocation.data,
      dailySurveyStatusLineByLocation: dailySurveyStatusLineByLocation.data,
      employeeTempByLocation: employeeTempByLocation.data,
      failedSurveyCountByDate: failedSurveyCountByDate.data,
      // weeklySurveyCountByLocation: weeklySurveyCountByLocation.data,
      // weeklyTempTrendByLocation: weeklyTempTrendByLocation.data,
    };
    dispatch({
      type: actions.DATA_LOADED,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};
