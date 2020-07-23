// Import pre-configured api
import api from '../../utils/api';

// Import Action Types
import * as actions from './types';

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.auth_token;

  // Load token to Headers
  const config = {
    headers: {},
  };
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

// Helper function (not exported action)
// that handles sending user request
// to /auth/users/me
export const sendUserRequest = async (dispatch, getState) => {
  // Build Config Header by getting auth-token from state
  const config = tokenConfig(getState);

  // Attempt Request using Try-Catch
  try {
    const res = await api.get('/auth/person', config);
    dispatch({
      type: actions.USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: actions.AUTH_ERROR,
    });
  }
};

// Action that loads current user in to
// state by calling the above 'sendUserRequest' function
export const loadUser = () => async (dispatch, getState) => {
  // Set User Loading
  dispatch({ type: actions.USER_LOADING });

  // Send User Request
  sendUserRequest(dispatch, getState);
};

// LOGIN USER
export const login = (email, password) => async (dispatch, getState) => {
  // Request Body
  const body = JSON.stringify({
    email,
    password,
  });

  // Attempt Request using Try-Catch
  try {
    const res = await api.post('/auth/login', body);

    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // Error Handeling
    console.error(err.response);
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: err.response.data,
    });
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  // Build Config Header by getting auth-token from state
  const config = tokenConfig(getState);

  // Attempt Request using Try-Catch
  try {
    await api.post('/auth/logout', null, config);
    dispatch({
      type: actions.LOGOUT_SUCCESS,
    });
  } catch (err) {
    // Error Handeling
    console.error(err);

    dispatch({
      type: actions.AUTH_ERROR,
    });
  }
};
