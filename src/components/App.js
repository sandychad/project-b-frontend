// React
import React, { Component } from 'react';

// Redux Provider + Store + Actions
import { Provider } from 'react-redux';
import store from '../redux/store';
import { loadUser } from '../redux/actions/auth';

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
import Header from './layout/Header';
import Main from './Main';
import Login from './Login';
import About from './About';
import Home from './Home';

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route path='/' component={Header} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/about' component={About} />
              <Route path='/main' component={Main} />
            </Switch>
            <Redirect to='/' />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
