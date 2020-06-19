// React
import React, { Component } from 'react';

// React Router
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path='/main/people' component={People} />
        </Switch>
      </Container>
    );
  }
}

export default Main;
