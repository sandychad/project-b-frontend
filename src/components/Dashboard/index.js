// React
import React, { Component, Fragment } from 'react';

// React Router
import { Redirect, Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import { Container, Card } from 'react-bootstrap';

// Local Components
import * as paths from '../../utils/paths';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

const getBodyFromRole = (role) => {
  if (role === 'System Admin') {
    return <Card.Body></Card.Body>;
  } else if (role === 'COVID Admin') {
    return <Card.Body></Card.Body>;
  } else if (role === 'Location Security') {
    return (
      <Card.Body>
        <Link to={paths.SURVEY_PATH}>Survey</Link>
      </Card.Body>
    );
  } else {
    return <Fragment />;
  }
};

export class Dashboard extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  render() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to={paths.LOGIN_PATH} />;
    }
    return (
      <Container style={containerStyle}>
        <h2>Dashboard</h2>
        <h5>Your role is: {this.props.user.role.toString()}</h5>
        <Container>
          {this.props.user.role.map((r) => {
            if (r !== 'Employee' && r !== 'Visitor') {
              return (
                <Card key={r.trim()}>
                  <Card.Header>{r}</Card.Header>
                  {getBodyFromRole(r)}
                </Card>
              );
            } else {
              return <Fragment />;
            }
          })}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(Dashboard);
