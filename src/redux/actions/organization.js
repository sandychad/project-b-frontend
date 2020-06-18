// Action Types
import * as actions from './types';

// Import pre-configured API
import api from '../../utils/api';

// GET ORG NAME
export const getOrgName = () => async (dispatch) => {
  try {
    // Send Message: ORG_NAME_LOADING
    dispatch({
      type: actions.ORG_NAME_LOADING,
    });

    // Send GET request to /organization endpoint
    const res = await api.get('/organization/1');

    // Send Message: ORG_NAME_LOADED
    dispatch({
      type: actions.ORG_NAME_LOADED,
      payload: res.data.org_name,
    });
  } catch (err) {
    console.error(err);
  }
};
