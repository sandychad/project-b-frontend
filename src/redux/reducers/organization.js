// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  org_name: '',
  isLoading: false,
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ORG_NAME_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ORG_NAME_LOADED:
      return {
        ...state,
        org_name: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
