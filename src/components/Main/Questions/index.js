// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../../redux/actions/survey';

// React Router
import { Redirect, Link } from 'react-router-dom';

// Bootstrap
import { Container, Form, Button, Col } from 'react-bootstrap';

// Local Components
import OptionsWithParent from './SurveyFields/OptionsWithParent';
import OptionsWithoutParent from './SurveyFields/OptionsWithoutParent';
import Parent from './SurveyFields/Parent';
import TextWithoutParent from './SurveyFields/TextWithoutParent';

export class Questions extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    getQuestions: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (this.props.questions.length > 0) {
      return;
    }
    this.props.getQuestions();
  }

  handleSubmit() {}

  render() {
    const { person, questions } = this.props;
    if (!person.employee_id) {
      return <Redirect to='/main/people' />;
    }

    return (
      <Container className='mt-4'>
        <h4>
          {person.employee_id}
          {' - '}
          {person.first_name} {person.last_name}
        </h4>
        <Container>
          <Form className='mt-4' onSubmit={this.handleSubmit}>
            {questions.map((question, index) => {
              const { question_type, parent_question_id } = question;
              if (parent_question_id === '0') {
                if (question_type === 'N/A') {
                  return <Parent question={question} />;
                } else if (question_type === 'options') {
                  return <OptionsWithoutParent question={question} />;
                } else if (question_type === 'text') {
                  return <TextWithoutParent question={question} />;
                } else {
                  return <Container />;
                }
              } else {
                if (question_type === 'options') {
                  return <OptionsWithParent question={question} />;
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
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.survey.questions,
  person: state.survey.person,
});

export default connect(mapStateToProps, { getQuestions })(Questions);
