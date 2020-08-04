// React
import React, { Component, Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '../../../redux/actions/data';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local components
import Loading from '../../common/Loading';
import DailySurveyResult from './DailySurveyResult';
import SurveyStatus from './SurveyStatus';
import EmployeeTempResults from './EmployeeTempResults';
import FailedSurvey from './FailedSurvey';
import AverageTemperature from './AverageTemperature';
//import WeeklySurveyCount from './WeeklySurveyCount';
//import WeeklyTemperatureTrend from './WeeklyTemperatureTrend';

// Local Styles
const containerStyle = {
  marginTop: '80px',
  height: '100%',
};

export class Reports extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    avgTempByLocation: PropTypes.array.isRequired,
    dailySurveyStatusByLocation: PropTypes.array.isRequired,
    dailySurveyStatusLineByLocation: PropTypes.array.isRequired,
    employeeTempByLocation: PropTypes.array.isRequired,
    failedSurveyCountByDate: PropTypes.array.isRequired,
    //weeklySurveyCountByLocation: PropTypes.array.isRequired,
    //weeklyTempTrendByLocation: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  render() {
    const {
      isLoading,
      avgTempByLocation,
      dailySurveyStatusByLocation,
      dailySurveyStatusLineByLocation,
      employeeTempByLocation,
      failedSurveyCountByDate,
      //weeklySurveyCountByLocation,
      //weeklyTempTrendByLocation,
    } = this.props;

    return (
      <Container style={containerStyle} fluid='md'>
        {isLoading ? (
          <Loading />
        ) : (
          <Fragment>
            <h2 className='text-center'>Survey Status - Bar Chart</h2>
            <br />
            <SurveyStatus data={dailySurveyStatusByLocation} />
            <br /> <br />
            <h2 className='text-center'>Daily Survey Results - Line Chart</h2>
            <br />
            <DailySurveyResult data={dailySurveyStatusLineByLocation} />
            <br /> <br />
            <h2 className='text-center'>Failed Surveys</h2>
            <br />
            <FailedSurvey data={failedSurveyCountByDate} />
            <br /> <br />
            <h2 className='text-center'>
              Employee Temperature Results - Scatter Plot
            </h2>
            <br />
            <EmployeeTempResults data={employeeTempByLocation} />
            <br /> <br />
            <h2 className='text-center'>AverageTemperature</h2>
            <br />
            <AverageTemperature data={avgTempByLocation} />
            <br /> <br />
            {/* <h2 className='text-center'>Weekly Survey Count - Single Line Chart</h2>
            <br />
            <WeeklySurveyCount data={weeklySurveyCountByLocation} />
            <br /> <br />
            <h2 className='text-center'>
              Weekly Temperature Trend - Single Line Chart
            </h2>
            <br />
            <WeeklyTemperatureTrend /> */}
          </Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.data.isLoading,
  avgTempByLocation: state.data.avgTempByLocation,
  dailySurveyStatusByLocation: state.data.dailySurveyStatusByLocation,
  dailySurveyStatusLineByLocation: state.data.dailySurveyStatusLineByLocation,
  employeeTempByLocation: state.data.employeeTempByLocation,
  failedSurveyCountByDate: state.data.failedSurveyCountByDate,
  weeklySurveyCountByLocation: state.data.weeklySurveyCountByLocation,
  weeklyTempTrendByLocation: state.data.weeklyTempTrendByLocation,
});

export default connect(mapStateToProps, { getData })(Reports);
