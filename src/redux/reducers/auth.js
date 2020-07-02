// Import Action Types
import * as actions from '../actions/types';

// Initialize State
const initialState = {
  auth_token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

// Reducer Function (switches on action type)
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case actions.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.auth_token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case actions.LOGOUT_SUCCESS:
    case actions.AUTH_ERROR:
    case actions.LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        auth_token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
