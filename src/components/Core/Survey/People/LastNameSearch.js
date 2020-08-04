// React
import React, { Component, Fragment } from 'react';

// React Bootstrap
import { Row, Button } from 'react-bootstrap';

// Local Components
import { getRowParams } from './helpers';

export class LastNameSearch extends Component {
  render() {
    const { letters, handleLetterClick } = this.props;

    const rowParams = getRowParams();

    return (
      <Fragment>
        <h4>Please select your last initial: </h4>
        {rowParams.map((row) => (
          <Row key={row.min} className='justify-content-center'>
            {letters.map((letter, index) =>
              index < row.max && index >= row.min ? (
                <Button
                  size='md'
                  className='m-1'
                  variant={letter.disabled ? 'secondary' : 'primary'}
                  key={index}
                  value={letter.text}
                  disabled={letter.disabled}
                  style={{ width: '50px' }}
                  onClick={handleLetterClick}
                >
                  {letter.text}
                </Button>
              ) : null
            )}
          </Row>
        ))}
      </Fragment>
    );
  }
}

export default LastNameSearch;
