// React
import React from 'react';

// React Bootstrap
import { Card, Form } from 'react-bootstrap';

export default function OptionsWithParent({ question }) {
  const { id, question_text } = question;
  return (
    <Card key={id}>
      <Card.Body className='text-center'>
        <Card.Text>{question_text}</Card.Text>
        <Form.Group>
          <Form.Check inline type='radio' value='Yes' label='Yes' />
          <Form.Check inline type='radio' value='No' label='No' />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
