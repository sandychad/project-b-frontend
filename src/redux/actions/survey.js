// Action Types
import * as actions from './types';

// Helper functions
import { getDateString } from '../../utils/today';
import api from '../../utils/api';

// GET QUESTIONS
export const getQuestions = () => async (dispatch, getState) => {
  try {
    // Send Message: QUESTIONS_LOADING
    dispatch({
      type: actions.QUESTIONS_LOADING,
    });

    // Get Org ID from user in state
    const orgID = getState().auth.user.org;

    // Send GET request to /questions endpoint
    const res = await api.get(`/questions?org=${orgID}`);

    // Send Message: QUESTIONS_LOADED
    dispatch({
      type: actions.QUESTIONS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// CLEAR QUESTIONS
export const clearQuestions = () => (dispatch) => {
  // CLEAR QUESTIONS
  dispatch({
    type: actions.CLEAR_QUESTIONS,
  });
};

// SET PERSON
export const setPerson = (person) => (dispatch) => {
  // SET PERSON
  dispatch({
    type: actions.SET_PERSON,
    payload: person,
  });
};

// CLEAR PERSON
export const clearPerson = () => (dispatch) => {
  // CLEAR PERSON
  dispatch({
    type: actions.CLEAR_PERSON,
  });
};

// SUBMIT FORM
export const submitForm = (response) => async (dispatch) => {
  try {
    // Send Message: SUBMIT_FORM
    dispatch({
      type: actions.SUBMIT_FORM,
    });

    // Add date
    response['date'] = getDateString();

    // Send POST request to /submit/ endpoint
    const res = await api.post('/submit/', response);

    // Send Message: DECISION_LOADED
    dispatch({
      type: actions.DECISION_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
