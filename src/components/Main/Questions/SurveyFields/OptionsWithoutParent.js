// React
import React from 'react';

// React Bootstrap
import { Card, Form } from 'react-bootstrap';

export default function OptionsWithoutParent({ question }) {
  const { id, question_text } = question;
  return (
    <Card key={id}>
      <Card.Header>
        <Card.Title>{question_text}</Card.Title>
      </Card.Header>
      <Card.Body className='text-center'>
        <Form.Group key={id}>
          <Form.Check inline type='radio' value='Yes' label='Yes' />
          <Form.Check inline type='radio' value='No' label='No' />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
