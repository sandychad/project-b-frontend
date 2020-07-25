// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  isLoading: false,
  dailySurveyData: [],
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.DATA_LOADED:
      return {
        ...state,
        isLoading: false,
        dailySurveyData: action.payload,
      };
    default:
      return state;
  }
}
