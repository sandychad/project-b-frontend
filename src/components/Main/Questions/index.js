// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions, submitForm } from '../../../redux/actions/survey';

// React Router
import { Redirect, Link } from 'react-router-dom';

// Form Validation
import { Formik } from 'formik';

// Bootstrap
import { Container, Form, Button, Col } from 'react-bootstrap';

// Local Components
import OptionsWithParent from './SurveyFields/Options/OptionsWithParent';
import OptionsWithoutParent from './SurveyFields/Options/OptionsWithoutParent';
import Parent from './SurveyFields/Parent';
import TextWithoutParent from './SurveyFields/Text/TextWithoutParent';

export class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestions: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
    submitForm: PropTypes.func.isRequired,
  };
  componentDidMount() {
    if (this.props.questions.length > 0) {
      return;
    }
    this.props.getQuestions();
  }

  render() {
    const { person, questions } = this.props;

    if (!person.employee_id) {
      return <Redirect to='/main/people' />;
    }

    let formValues = {};
    questions.map((question) => {
      if (question.question_type !== 'N/A') {
        return (formValues[question.id] = '');
      } else {
        return (formValues[question.id] = 'N/A');
      }
    });

    return (
      <Container className='mt-4'>
        <h4>
          {person.employee_id}
          {' - '}
          {person.first_name} {person.last_name}
        </h4>
        <Container>
          <Formik
            initialValues={formValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              const response = {
                person_id: this.props.person.id,
                responses: values,
              };
              console.log(response);
              this.props.submitForm(response);
              resetForm();
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form noValidate className='mt-4' onSubmit={formik.handleSubmit}>
                {questions.map((question) => {
                  const { id, question_type, parent_question_id } = question;
                  if (parent_question_id === '0') {
                    if (question_type === 'N/A') {
                      return <Parent key={id} question={question} />;
                    } else if (question_type === 'options') {
                      return (
                        <OptionsWithoutParent
                          key={id}
                          id={id}
                          question={question}
                          formik={formik}
                        />
                      );
                    } else if (question_type === 'text') {
                      return (
                        <TextWithoutParent
                          key={id}
                          id={id}
                          question={question}
                          formik={formik}
                        />
                      );
                    } else {
                      return <Container />;
                    }
                  } else {
                    if (question_type === 'options') {
                      return (
                        <OptionsWithParent
                          key={id}
                          id={id}
                          question={question}
                          formik={formik}
                        />
                      );
                    } else {
                      return <Container />;
                    }
                  }
                })}
                <Col className='text-right m-4'>
                  <Button
                    as={Link}
                    to='/main/people'
                    variant='secondary'
                    className='mr-2'
                  >
                    Cancel
                  </Button>
                  <Button type='submit' className='mr-2'>
                    Submit
                  </Button>
                </Col>
              </Form>
            )}
          </Formik>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.survey.questions,
  person: state.survey.person,
});

export default connect(mapStateToProps, { getQuestions, submitForm })(
  Questions
);
