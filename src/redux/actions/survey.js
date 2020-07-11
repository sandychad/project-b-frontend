// Action Types
import * as actions from './types';

// Import pre-configured API
import api from '../../utils/api';

// GET QUESTIONS
export const getQuestions = () => async (dispatch) => {
  try {
    // Send Message: QUESTIONS_LOADING
    dispatch({
      type: actions.QUESTIONS_LOADING,
    });

    // Send GET request to /questions endpoint
    const res = await api.get('/questions');

    // Send Message: QUESTIONS_LOADED
    dispatch({
      type: actions.QUESTIONS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// SET PERSON
export const setPerson = (person) => (dispatch) => {
  // SET PERSON
  dispatch({
    type: actions.SET_PERSON,
    payload: person,
  });
};

// Helper function - today's date
const today = () => {
  const now = new Date();
  const todaysDay = now.getDate();
  const todaysMonth = now.getMonth();
  const todaysYear = now.getFullYear();
  return `${todaysYear}-${todaysMonth + 1}-${todaysDay}`;
};

// SUBMIT FORM
export const submitForm = (response) => async (dispatch) => {
  try {
    // Send Message: SUBMIT_FORM
    dispatch({
      type: actions.SUBMIT_FORM,
    });

    // Add date
    response['date'] = today();

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
