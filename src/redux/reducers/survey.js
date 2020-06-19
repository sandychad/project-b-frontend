// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  questions: [],
  isLoading: false,
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.QUESTIONS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.QUESTIONS_LOADED:
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
