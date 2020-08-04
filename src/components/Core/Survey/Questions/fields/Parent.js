// React
import React from 'react';

// React Bootstrap
import { Card } from 'react-bootstrap';

export default function Parent({ question }) {
  const { question_text } = question;
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h4 style={{ color: '#007bff' }}>{question_text}</h4>
        </Card.Title>
      </Card.Header>
    </Card>
  );
}
