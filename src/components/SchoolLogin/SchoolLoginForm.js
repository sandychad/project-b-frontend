// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

export default function SchoolLogin(props) {
  return (
    <Container fluid>
      <Form noValidate>
        <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
          <Row>
            <Form.Label>Login Code</Form.Label>
            <Form.Label>{props.user_hash}</Form.Label>
          </Row>
          <Row>
            <Form.Label>Student ID</Form.Label>
            <Form.Text className='text-muted'>Student ID</Form.Text>
          </Row>
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
