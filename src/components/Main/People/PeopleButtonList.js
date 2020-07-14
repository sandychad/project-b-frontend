// React
import React, { Component, Fragment } from 'react';

// React Bootstrap
import { Container, Row, Button } from 'react-bootstrap';

export class PeopleButtonList extends Component {
  render() {
    const { people, selectedLetter, handlePersonClick } = this.props;
    return (
      <Container className='mt-4 text-left'>
        {people.map((person) => {
          if (person.last_name[0] === selectedLetter) {
            return (
              <Row className='mt-2 mb-2' key={person.employee_id}>
                <Button
                  onClick={() => handlePersonClick(person)}
                  size='lg'
                  variant='outline-primary'
                  block
                  value={person}
                >
                  {person.employee_id}
                  {' - '}
                  {person.first_name} {person.last_name}
                </Button>
              </Row>
            );
          }
          return <Fragment key={person.employee_id} />;
        })}
      </Container>
    );
  }
}

export default PeopleButtonList;
