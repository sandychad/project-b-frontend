// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local components
import DailySurveyResult from './DailySurveyResult';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Reports extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <DailySurveyResult />
      </Container>
    );
  }
}

export default Reports;
