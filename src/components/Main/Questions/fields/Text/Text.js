// React
import React from 'react';

// React Bootstrap
import { Form } from 'react-bootstrap';

export default function RadioButton({
  field: { name, onChange, onBlur },
  values,
  id,
  ...props
}) {
  return (
    <Form.Control
      type='number'
      id={id}
      placeholder='<Enter temperature>'
      name={name}
      value={values[id]}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
}
