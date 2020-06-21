// React
import React from 'react';

// Formik
import { Field } from 'formik';

// React Bootstrap
import { Card, Form } from 'react-bootstrap';

// Local Components
import RadioButton from './RadioButton';

export default function OptionsWithoutParent({ id, question, formik }) {
  const { question_text } = question;
  const { values } = formik;
  return (
    <Card>
      <Card.Header>
        <Card.Title>{question_text}</Card.Title>
      </Card.Header>
      <Card.Body className='text-center'>
        <Form.Group value={values[id]}>
          <Field component={RadioButton} name={id} id='Yes' />
          <Field component={RadioButton} name={id} id='No' />
        </Form.Group>
      </Card.Body>
    </Card>
  );
}
