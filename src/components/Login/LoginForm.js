// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function LoginForm({ formik }) {
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
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='joe@example.com'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type='invalid' tooltip='true'>
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Strong Password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && !!errors.password}
          />
          <Form.Control.Feedback type='invalid' tooltip='true'>
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 2, offset: 7 }}>
          <Button type='submit'>Login</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
