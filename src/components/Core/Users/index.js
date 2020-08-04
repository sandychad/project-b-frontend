// React
import React, { Component } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Users extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <h2>User Management</h2>
      </Container>
    );
  }
}

export default Users;
