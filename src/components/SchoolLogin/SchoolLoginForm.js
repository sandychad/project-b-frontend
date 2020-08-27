// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

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
    <Container fluid>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
          <Form.Label>Login Code</Form.Label>
          <Col md={6}>
            <Form.Control plaintext readOnly defaultValue={user_hash} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
          <Form.Label>Student ID</Form.Label>
          <Col md={6}>
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
        <Form.Group as={Col} md={{ span: 2, offset: 7 }}>
          <Button variant='primary' type='submit'>
            Login
          </Button>
          <Button type='cancel'>Cancel</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
