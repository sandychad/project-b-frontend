// React
import React from 'react';

// Formik
import { Field } from 'formik';

// React Bootstrap
import { Card, InputGroup, Col } from 'react-bootstrap';

// Local Components
import Temp from './Temperature';

export default function TemperatureWithoutParent({ id, question, formik }) {
  const { question_text } = question;
  const { values } = formik;
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h4 style={{ color: '#007bff' }}>{question_text}</h4>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <Field component={Temp} name={id} values={values} />
            <InputGroup.Append>
              <InputGroup.Text>°F</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Card.Body>
    </Card>
  );
}
