// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  people: [],
  isLoading: false,
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.PEOPLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.PEOPLE_LOADED:
      return {
        ...state,
        people: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
