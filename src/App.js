// React
import React, { Component } from 'react';

// Redux Provider + Store + Actions
import { Provider } from 'react-redux';
import store from './redux/store';

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
        <Container>
          <Header />
          <Main />
        </Container>
      </Provider>
    );
  }
}

export default App;
