// React
import React from 'react';

// Formik
import { Field } from 'formik';

// React Bootstrap
import { Card, InputGroup, Col } from 'react-bootstrap';

// Local Components
import Text from './Text';

export default function TextWithoutParent({ id, question, formik }) {
  const { question_text } = question;
  const { values } = formik;
  return (
    <Card>
      <Card.Header>
        <Card.Title>{question_text}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <Field component={Text} name={id} values={values} />
            <InputGroup.Append>
              <InputGroup.Text>°F</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Card.Body>
    </Card>
  );
}
