// React
import React, { Component } from 'react';

// Redux Provider + Store + Actions
import { Provider } from 'react-redux';
import store from '../redux/store';
import { loadUser } from '../redux/actions/auth';

// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import Header from './layout/Header';
import Home from './Home';
import About from './About';
import Login from './Login';
import Core from './Core';
import * as paths from '../utils/paths';

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route path={paths.HOME_PATH} component={Header} />
            <Switch>
              <Route exact path={paths.HOME_PATH} component={Home} />
              <Route path={paths.ABOUT_PATH} component={About} />
              <Route path={paths.LOGIN_PATH} component={Login} />
              <Route path={paths.APP_PATH} component={Core} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
