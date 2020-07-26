// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  isLoading: false,
  passFailData: [],
  tempData: [],
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
        passFailData: action.payload.passFailData,
        tempData: action.payload.tempData,
      };
    default:
      return state;
  }
}
