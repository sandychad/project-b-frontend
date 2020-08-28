// Import React
import React from 'react';

// Bootstrap Components
import { Form, Col, Row, Button } from 'react-bootstrap';

export default function SchoolLogin(props) {
  const { formik, user_hash } = props;

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
  } = formik;

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group as={Row} className='justify-content-md-center'>
        <Form.Label column sm={2} className='text-right'>
          <dt>Login Code</dt>
        </Form.Label>
        <Col sm={4}>
          <Form.Control plaintext readOnly defaultValue={user_hash} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='justify-content-md-center'>
        <Form.Label column sm={2} className='text-right'>
          <dt>Student ID</dt>
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type='text'
            name='studentID'
            value={values.studentID}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.studentID && !!errors.studentID}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='justify-content-md-center'>
        <Button variant='primary' type='submit' className='m-4'>
          Login
        </Button>
        <Button type='cancel' className='m-4'>
          Cancel
        </Button>
      </Form.Group>
    </Form>
  );
}
