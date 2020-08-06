// Import Action Types
import * as actions from '../actions/types';

// Helper functions
import { getDateString } from '../../utils/today';

// Initialize State
const initialState = {
  isLoading: false,
  date: getDateString(),
  avgTempByLocation: [],
  dailySurveyStatusByLocation: [],
  dailySurveyStatusLineByLocation: [],
  employeeTempByLocation: [],
  failedSurveyCountByDate: [],
  weeklySurveyCountByLocation: [],
  weeklyTempTrendByLocation: [],
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case actions.DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.DATA_LOADED:
      return {
        ...state,
        isLoading: false,
        avgTempByLocation: action.payload.avgTempByLocation,
        dailySurveyStatusByLocation: action.payload.dailySurveyStatusByLocation,
        dailySurveyStatusLineByLocation:
          action.payload.dailySurveyStatusLineByLocation,
        employeeTempByLocation: action.payload.employeeTempByLocation,
        failedSurveyCountByDate: action.payload.failedSurveyCountByDate,
        // Trend endpoints not currently in use
        // weeklySurveyCountByLocation: action.payload.weeklySurveyCountByLocation,
        // weeklyTempTrendByLocation: action.payload.weeklyTempTrendByLocation,
      };
    default:
      return state;
  }
}
