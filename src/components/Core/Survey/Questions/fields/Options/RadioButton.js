// React
import React from 'react';

// React Bootstrap
import { Form } from 'react-bootstrap';

export default function RadioButton({
  field: { name, value, onChange, onBlur },
  id,
  ...props
}) {
  return (
    <Form.Check
      inline
      type='radio'
      id={id}
      name={name}
      value={id}
      checked={id === value}
      label={id}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
}
