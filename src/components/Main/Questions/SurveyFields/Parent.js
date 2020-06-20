// React
import React from 'react';

// React Bootstrap
import { Card } from 'react-bootstrap';

export default function Parent({ question }) {
  const { id, question_text } = question;
  return (
    <Card key={id}>
      <Card.Header>
        <Card.Title>{question_text}</Card.Title>
      </Card.Header>
    </Card>
  );
}
