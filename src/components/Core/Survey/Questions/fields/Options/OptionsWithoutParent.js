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
        <Card.Title>
          <h4 style={{ color: '#007bff' }}>{question_text}</h4>
        </Card.Title>
      </Card.Header>
      <Card.Body className='text-center'>
        <h4>
          <Form.Group value={values[id]}>
            <Field component={RadioButton} name={id} id='Yes' />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Field component={RadioButton} name={id} id='No' />
          </Form.Group>
        </h4>
      </Card.Body>
    </Card>
  );
}
