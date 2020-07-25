// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '../../redux/actions/data';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local components
import DailySurveyResult from './DailySurveyResult';
import SurveyStatus from './SurveyStatus';
import EmployeeTempResults from './EmployeeTempResults';
import FailedSurvey from './FailedSurvey';
import AverageTemperature from './AverageTemperature';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Reports extends Component {
  static propTypes = {
    dailySurveyData: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  render() {
    const { dailySurveyData } = this.props;

    return (
      <Container style={containerStyle}>
        <h2 class='text-center'>Survey Status - Bar Chart</h2>
        <SurveyStatus data={dailySurveyData} />

        <h2 class='text-center'>Daily Survey Results - Line Chart</h2>
        <DailySurveyResult data={dailySurveyData} />

        <h2 class='text-center'>Failed Surveys</h2>
        <FailedSurvey />

        <h2 class='text-center'>Employee Temperature Results - Scatter Plot</h2>
        <EmployeeTempResults />

        <h2 class='text-center'>AverageTemperature</h2>
        <AverageTemperature />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  dailySurveyData: state.data.dailySurveyData,
});

export default connect(mapStateToProps, { getData })(Reports);
