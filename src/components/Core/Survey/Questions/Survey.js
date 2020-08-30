// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Bootstrap
import { Container, Form, Button, Col } from 'react-bootstrap';

// Local Components
import OptionsWithParent from './fields/Options/OptionsWithParent';
import OptionsWithoutParent from './fields/Options/OptionsWithoutParent';
import Parent from './fields/Parent';
import TemperatureWithoutParent from './fields/Temperature/TemperatureWithoutParent';
import * as paths from '../../../../utils/paths';

export default function Survey(props) {
  const user = useSelector((state) => state.auth.user);
  const { questions, formik } = props;
  const { handleSubmit, isValid } = props.formik;

  const cancelPath = (user) => {
    const { user_hash, role } = user;
    let path = '';
    if (role.includes('Student')) {
      path = paths.SCHOOL_LOGIN_STUB + user_hash;
    } else {
      path = paths.PEOPLE_SEARCH_PATH;
    }
    return path;
  };

  return (
    <Form noValidate className='mt-4' onSubmit={handleSubmit}>
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
              <TemperatureWithoutParent
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
          to={cancelPath(user)}
          variant='secondary'
          className='mr-2'
        >
          Cancel
        </Button>
        <Button
          type='submit'
          className='mr-2'
          disabled={isValid ? false : true}
        >
          Submit
        </Button>
      </Col>
    </Form>
  );
}
