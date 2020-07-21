// React
import React, { Component } from 'react';

// React Router
import { Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import People from './People';
import Questions from './Questions';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Main extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to='/login' />;
    }
    return (
      <Container style={containerStyle}>
        <h2 style={{ textAlign: 'center' }}>COVID-19 Health Survey</h2>
        <Switch>
          <Route path='/main/people' component={People} />
          <Route path='/main/questions' component={Questions} />
        </Switch>
        <Redirect to='/main/people' />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Main);
