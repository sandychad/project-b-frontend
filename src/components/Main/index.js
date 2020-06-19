// React
import React, { Component } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import People from './People';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Main extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <h1>Welcome to SymScreen</h1>
        <People />
      </Container>
    );
  }
}

export default Main;
