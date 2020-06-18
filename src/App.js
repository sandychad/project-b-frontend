// React
import React, { Component } from 'react';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import Header from './components/layout/Header';

// Local Styles
import './css/App.css';

export class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <h1>Hello World</h1>
      </Container>
    );
  }
}

export default App;
