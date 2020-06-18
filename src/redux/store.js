// Redux imports, DevTools extension, redux-thunk middleware
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Import Root Reducer (combination of all reducers)
import rootReducer from './reducers';

// Initialize State
const initialState = {};

// Redux Middleware
const middleware = [thunk];

// Create Store using above components, use composeWithDevTools to enable Redux DevTools support
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Export store as default
export default store;
