// React
import React, { Component } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
  textAlign: 'center',
};

export class Home extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <h2>Welcome to SymScreen</h2>
      </Container>
    );
  }
}

export default Home;
