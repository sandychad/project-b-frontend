// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function SchoolLogin() {
  return (
    <Container fluid>
      <Form noValidate>
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Form.Label>Login Code</Form.Label>
          <Form.Label>Login Code Value</Form.Label>
          <Form.Label>Student ID</Form.Label>
          <Form.Text className='text-muted'>Student ID</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
        <Button type='cancel'>Cancel</Button>
      </Form>
    </Container>
  );
}
