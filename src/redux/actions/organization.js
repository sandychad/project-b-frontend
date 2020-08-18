// Action Types
import * as actions from './types';

// Import pre-configured API
import api from '../../utils/api';

// GET ORG NAME
export const getOrgName = () => async (dispatch, getState) => {
  try {
    // Send Message: ORG_NAME_LOADING
    dispatch({
      type: actions.ORG_NAME_LOADING,
    });

    // Get Org ID from user in state
    const orgID = getState().auth.user.org;

    // Send GET request to /organization endpoint
    const res = await api.get(`/organization/${orgID}`);

    // Send Message: ORG_NAME_LOADED
    dispatch({
      type: actions.ORG_NAME_LOADED,
      payload: res.data.org_name,
    });
  } catch (err) {
    console.error(err);
  }
};

// GET LIST OF CITIES
export const getCities = () => async (dispatch, getState) => {
  try {
    // Send Message: CITIES_LOADING
    dispatch({
      type: actions.CITIES_LOADING,
    });

    // Get Org ID from user in state
    const orgID = getState().auth.user.org;

    // Send GET request to /cities endpoint
    const res = await api.get(`/cities?org=${orgID}`);

    // Send Message: CITIES_LOADED
    dispatch({
      type: actions.CITIES_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
