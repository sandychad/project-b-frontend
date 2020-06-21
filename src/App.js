// React
import React, { Component } from 'react';

// Redux Provider + Store + Actions
import { Provider } from 'react-redux';
import store from './redux/store';

// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import Header from './components/layout/Header';
import Main from './components/Main';

// Local Styles
import './css/App.css';

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Header />
            <Switch>
              <Route path='/' component={Main}></Route>
            </Switch>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
