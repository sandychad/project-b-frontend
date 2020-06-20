// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../../redux/actions/survey';

// React Router
import { Redirect, Link } from 'react-router-dom';

// Bootstrap
import {
  Container,
  Card,
  Form,
  InputGroup,
  Button,
  Col,
} from 'react-bootstrap';

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
              const {
                id,
                question_text,
                question_type,
                parent_question_id,
              } = question;
              if (parent_question_id === '0') {
                if (question_type === 'N/A') {
                  return (
                    <Card key={id}>
                      <Card.Header>
                        <Card.Title>{question_text}</Card.Title>
                      </Card.Header>
                    </Card>
                  );
                } else if (question_type === 'options') {
                  return (
                    <Card key={id}>
                      <Card.Header>
                        <Card.Title>{question_text}</Card.Title>
                      </Card.Header>
                      <Card.Body className='text-center'>
                        <Form.Group key={id}>
                          <Form.Check
                            inline
                            type='radio'
                            value='Yes'
                            label='Yes'
                          />
                          <Form.Check
                            inline
                            type='radio'
                            value='No'
                            label='No'
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  );
                } else if (question_type === 'text') {
                  return (
                    <Card key={id}>
                      <Card.Header>
                        <Card.Title>{question_text}</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Col md={{ span: 4, offset: 4 }}>
                          <InputGroup>
                            <Form.Control type='text' placeholder='100.0' />
                            <InputGroup.Append>
                              <InputGroup.Text>°F</InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                          <InputGroup>
                            <Form.Control
                              as='select'
                              custom
                              size='lg'
                              defaultValue='100'
                            >
                              <option value='95'>95</option>
                              <option value='96'>96</option>
                              <option value='97'>97</option>
                              <option value='98'>98</option>
                              <option value='99'>99</option>
                              <option value='100'>100</option>
                              <option value='101'>101</option>
                              <option value='102'>102</option>
                              <option value='103'>103</option>
                              <option value='104'>104</option>
                            </Form.Control>
                            <Form.Control
                              as='select'
                              size='lg'
                              defaultValue='.0'
                            >
                              <option value='.0'>.0</option>
                              <option value='.1'>.1</option>
                              <option value='.2'>.2</option>
                              <option value='.3'>.3</option>
                              <option value='.4'>.4</option>
                              <option value='.5'>.5</option>
                              <option value='.6'>.6</option>
                              <option value='.7'>.7</option>
                              <option value='.8'>.8</option>
                              <option value='.9'>.9</option>
                            </Form.Control>
                            <InputGroup.Append>
                              <InputGroup.Text>°F</InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </Col>
                      </Card.Body>
                    </Card>
                  );
                } else {
                  return <Container />;
                }
              } else {
                if (question_type === 'options') {
                  return (
                    <Card key={id}>
                      <Card.Body className='text-center'>
                        <Card.Text>{question_text}</Card.Text>
                        <Form.Group>
                          <Form.Check
                            inline
                            type='radio'
                            value='Yes'
                            label='Yes'
                          />
                          <Form.Check
                            inline
                            type='radio'
                            value='No'
                            label='No'
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
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
