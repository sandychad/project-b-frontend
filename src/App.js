// React
import React, { Component } from 'react';

// Redux Provider + Store + Actions
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import Header from './components/layout/Header';
import Main from './components/Main';
import Login from './components/Login';

// Local Styles
import './css/App.css';

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Header />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/main' component={Main} />
            </Switch>
            <Redirect to='/login' />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
