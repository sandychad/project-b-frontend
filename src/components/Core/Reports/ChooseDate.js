// React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDate } from '../../../redux/actions/data';

// Bootstrap
import { Container, Row } from 'react-bootstrap';

// Date Picker
import DatePicker from 'react-datepicker';

// Helpers
import { dateObjectFromString } from '../../../utils/today';

// Styles
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChooseDate = (props) => {
  return (
    <Container>
      <Row className='justify-content-md-end'>
        <h5 style={{ marginTop: 4, marginRight: 5 }}>Select Date:</h5>
        <DatePicker
          selected={dateObjectFromString(props.date)}
          maxDate={new Date()}
          onChange={(date) => props.setDate(date)}
        />
      </Row>
    </Container>
  );
};

ChooseDate.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.data.date,
});

export default connect(mapStateToProps, { setDate })(ChooseDate);
