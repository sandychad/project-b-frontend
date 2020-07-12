// Import React
import React, { Component } from 'react';

// React Bootstrap
import { Container, Spinner } from 'react-bootstrap';

export class Loading extends Component {
  render() {
    return (
      <Container className='text-center'>
        <Spinner variant='primary' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </Container>
    );
  }
}

export default Loading;
