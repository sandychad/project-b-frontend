// React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDate } from '../../../redux/actions/data';

// Bootstrap
import { Container } from 'react-bootstrap';

// Date Picker
import DatePicker from 'react-datepicker';

// Helpers
import { dateObjectFromString } from '../../../utils/today';

// Styles
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChooseDate = (props) => {
  return (
    <Container className='text-right'>
      <DatePicker
        selected={dateObjectFromString(props.date)}
        onChange={(date) => props.setDate(date)}
        dateFormat='yyyy-MM-dd'
      />
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
