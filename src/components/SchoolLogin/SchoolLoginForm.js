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
    <Container>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row className='justify-content-md-center'>
          <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
            <Form.Label>
              <dt>Login Code</dt>
            </Form.Label>
            <Col>
              <Form.Control plaintext readOnly defaultValue={user_hash} />
            </Col>
          </Form.Group>
        </Form.Row>

        <Form.Row className='justify-content-md-center'>
          <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
            <Col>
              <Form.Label>
                <dt>Student ID</dt>
              </Form.Label>
            </Col>
            <Col md={8}>
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
        </Form.Row>
        <Form.Row className='justify-content-md-center'>
          <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
            <Col md={6}>
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Col>
            <Col md={6}>
              <Button type='cancel'>Cancel</Button>
            </Col>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
}
