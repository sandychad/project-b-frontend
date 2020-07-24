// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local components
import DailySurveyResult from './DailySurveyResult';
import SurveyStatus from './SurveyStatus';
import EmployeeTempResults from './EmployeeTempResults';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Reports extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <h2 class='text-center'>Daily Survey Results</h2>
        <DailySurveyResult />

        <h2 class='text-center'>Survey Status</h2>
        <SurveyStatus />

        <h2 class='text-center'>Survey Status</h2>

        <h2 class='text-center'>Employee Temperature Results</h2>
        <EmployeeTempResults />

        <h2 class='text-center'>Survey Status</h2>
      </Container>
    );
  }
}

export default Reports;
