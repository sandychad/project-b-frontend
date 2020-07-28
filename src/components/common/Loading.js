// Import React
import React from 'react';

// React Bootstrap
import { Container, Spinner } from 'react-bootstrap';

export const Loading = () => {
  return (
    <Container className='text-center'>
      <Spinner variant='primary' animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
