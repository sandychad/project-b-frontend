// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function LoginForm({ formik }) {
  return (
    <Container fluid>
      <h2 className='text-center mt-4'>Login</h2>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='joe@example.com'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type='invalid' tooltip='true'>
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Strong Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <Form.Control.Feedback type='invalid' tooltip='true'>
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md={{ span: 2, offset: 7 }}>
          <Button type='submit'>Login</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
