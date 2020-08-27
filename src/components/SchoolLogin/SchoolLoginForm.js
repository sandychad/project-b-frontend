// Import React
import React from 'react';

// Bootstrap Components
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

export default function SchoolLogin(props) {
  return (
    <Container fluid>
      <Form noValidate>
        <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
          <Form.Label>Login Code</Form.Label>
          <Col md={6}>
            <Form.Control plaintext readOnly defaultValue={props.user_hash} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} md={{ span: 4, offset: 4 }}>
          <Form.Label>Student ID</Form.Label>
          <Col md={6}>
            <Form.Control type='text' className='text-muted' />
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
