// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getQuestions,
  clearQuestions,
  submitForm,
} from '../../../../redux/actions/survey';

// React Router
import { Redirect } from 'react-router-dom';

// Form Validation
import { Formik } from 'formik';

// Bootstrap
import { Container } from 'react-bootstrap';

// Local Components
import Decision from './Decision';
import { Loading } from '../../../common/Loading';
import Survey from './Survey';
import { getFormSchema } from './helpers';
import * as paths from '../../../../utils/paths';

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      showDecision: true,
    };

    this.hideDecision = this.hideDecision.bind(this);
  }

  static propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestions: PropTypes.func.isRequired,
    clearQuestions: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
    submitForm: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getQuestions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.getQuestions();
    }
  }

  hideDecision() {
    // Closing of decision
    this.setState({ showDecision: false });
  }

  setSubmit() {
    // Set submit flag
    this.setState({ submit: true });
  }

  componentWillUnmount() {
    this.props.clearQuestions();
  }

  render() {
    const { submit, showDecision } = this.state;
    const { person, questions, submitForm } = this.props;
    const { id, employee_id, first_name, last_name } = person;

    // Redirect if no person (erroneously typed /main/questions without using People search)
    if (!person.employee_id) {
      return <Redirect to={paths.PEOPLE_SEARCH_PATH} />;
    }

    // Redirect if successful submit + decision closed
    if (this.state.submit && !this.state.showDecision) {
      return <Redirect to={paths.PEOPLE_SEARCH_PATH} />;
    }

    // Generate formValues and schema based on questions (see ./helpers.js)
    const { formValues, schema } = getFormSchema(questions);

    return (
      <Container className='mt-4'>
        <h4>
          {employee_id}
          {' - '}
          {first_name} {last_name}
        </h4>
        {questions ? (
          <Container>
            <Formik
              initialValues={formValues}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                const response = {
                  person_id: id,
                  responses: values,
                };

                submitForm(response);
                this.setSubmit();
                resetForm();
                setSubmitting(false);
              }}
            >
              {(formik) => <Survey questions={questions} formik={formik} />}
            </Formik>
          </Container>
        ) : (
          <Loading />
        )}
        {submit ? (
          <Decision show={showDecision} onHide={this.hideDecision} />
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.survey.questions,
  person: state.survey.person,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  getQuestions,
  clearQuestions,
  submitForm,
})(Questions);
