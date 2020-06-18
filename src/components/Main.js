// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPeople } from '../redux/actions/people';
import { getOrgName } from '../redux/actions/organization';

// Bootstrap
import { Container } from 'react-bootstrap';

const containerStyle = {
  marginTop: '56px',
  height: '100%',
};

export class Main extends Component {
  static propTypes = {
    getPeople: PropTypes.func.isRequired,
    getOrgName: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getOrgName();
    this.props.getPeople('London');
  }

  render() {
    return (
      <Container style={containerStyle}>
        <h1>Hello World</h1>
      </Container>
    );
  }
}

export default connect(null, { getPeople, getOrgName })(Main);
