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
import * as Yup from 'yup';

// Bootstrap
import { Container, Form, Button, Col } from 'react-bootstrap';

// Local Components
import OptionsWithParent from './SurveyFields/Options/OptionsWithParent';
import OptionsWithoutParent from './SurveyFields/Options/OptionsWithoutParent';
import Parent from './SurveyFields/Parent';
import TextWithoutParent from './SurveyFields/Text/TextWithoutParent';
import Decision from './Decision';
import { Loading } from '../../common/Loading';

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
    person: PropTypes.object.isRequired,
    submitForm: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.questions.length > 0) {
      return;
    }
    this.props.getQuestions();
  }

  hideDecision() {
    this.setState({ showDecision: false });
  }

  setSubmit() {
    this.setState({ submit: true });
  }

  render() {
    const { person, questions } = this.props;

    if (!person.employee_id) {
      return <Redirect to='/main/people' />;
    }

    if (this.state.submit && !this.state.showDecision) {
      return <Redirect to='/main/people' />;
    }

    let formValues = {};
    let schema = {};
    questions.map(function (question) {
      switch (question.question_type) {
        case 'temp':
          formValues[question.id] = '';
          schema[question.id] = Yup.number().required('Required');
          break;
        case 'options':
        case 'text':
          formValues[question.id] = '';
          schema[question.id] = Yup.string().required('Required');
          break;
        case 'N/A':
        default:
          break;
      }
      return question;
    });
    return (
      <Container className='mt-4'>
        <h4>
          {person.employee_id}
          {' - '}
          {person.first_name} {person.last_name}
        </h4>
        {questions ? (
          <Container>
            <Formik
              initialValues={formValues}
              validationSchema={Yup.object().shape(schema)}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                const response = {
                  person_id: this.props.person.id,
                  responses: values,
                };

                this.props.submitForm(response);
                this.setSubmit();
                resetForm();
                setSubmitting(false);
              }}
            >
              {(formik) => (
                <Form
                  noValidate
                  className='mt-4'
                  onSubmit={formik.handleSubmit}
                >
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
                      } else if (question_type === 'temp') {
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
                    <Button
                      type='submit'
                      className='mr-2'
                      disabled={formik.isValid ? false : true}
                    >
                      Submit
                    </Button>
                  </Col>
                </Form>
              )}
            </Formik>
          </Container>
        ) : (
          <Loading />
        )}
        {this.state.submit ? (
          <Decision show={this.state.showDecision} onHide={this.hideDecision} />
        ) : null}
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
