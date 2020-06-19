// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../redux/actions/survey';

// Bootstrap
import { Container } from 'react-bootstrap';

export class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestions: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    const { person } = this.props;

    return (
      <Container className='mt-4'>
        <h4>
          {person.employee_id}
          {' - '}
          {person.first_name} {person.last_name}
        </h4>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.survey.questions,
  person: state.survey.person,
});

export default connect(mapStateToProps, { getQuestions })(Questions);
