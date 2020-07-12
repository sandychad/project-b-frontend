// React
import React, { Component } from 'react';

// React Bootstrap
import { Container } from 'react-bootstrap';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class About extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <h2 style={{ textAlign: 'center' }}>About</h2>
      </Container>
    );
  }
}

export default About;
