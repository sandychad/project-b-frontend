// React
import React from 'react';

// Bootstrap
import { Alert } from 'react-bootstrap';

export default function ErrorMessage(props) {
  const { message } = props;
  return <Alert variant='danger'>Error: {message}</Alert>;
}
