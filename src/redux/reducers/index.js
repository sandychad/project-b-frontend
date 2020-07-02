// Import combineReducers function from redux
import { combineReducers } from 'redux';

// Import all reducers
import people from './people';
import organization from './organization';
import survey from './survey';
import auth from './auth';

// Combine reducers into a single export
export default combineReducers({
  people,
  organization,
  survey,
  auth,
});
